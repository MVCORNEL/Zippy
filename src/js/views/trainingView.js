import img_1 from 'url:../../img/waiter-1.jpg';
import img_2 from 'url:../../img/waiter-2.jpg';
import img_3 from 'url:../../img/waiter-3.jpg';
import View from './View';
class TrainingView extends View {
  //ALL THIS ELMENTS WILL BI INITIALIZED AFTER THE MARKUP WAS RENDER, THEY WON'T EXIST PRIOR TO THAT
  _parentElement = document.querySelector('.cursor');
  #btnNext;
  #btnPrevious;
  _errorMessage = 'There are not reviews to be displayed';

  #trainings;
  #dotsContainer;
  #dots;

  render(data, goTO = 0) {
    if (super.render(data)) {
      this.#initDOM();
      this.#setResizeObserver();
      this.goToElement(goTO);
    }
  }

  #initDOM() {
    this.#btnNext = document.querySelector('.cursor__controller-btn--next');
    this.#btnPrevious = document.querySelector('.cursor__controller-btn--previous');
    this.#dotsContainer = document.querySelector('.cursor__controller-dots');
    this.#trainings = this._parentElement.querySelectorAll('.training');
    this.#dots = this._parentElement.querySelectorAll('.dot');
  }

  _generateMarkup() {
    return `
        <div class="cursor__box">
        ${this.#generateMarkupTrainings()}
        </div>
        <div class="cursor__controller">
            <button class="cursor__controller-btn cursor__controller-btn--previous btn-arrow btn-arrow--active">&larr;</button>
            <div class="cursor__controller-dots">
                  ${this.#generateMarkupDots()}
            </div>
            <button class="cursor__controller-btn cursor__controller-btn--next btn-arrow btn-arrow--active">&rarr;</button>
        </div>`;
  }

  #generateMarkupTrainings() {
    return this._data
      .map((training, index) => {
        return `
          
                <div class="training" data-training="${index}">
                    <img class="training__image training__image--1" src="${img_1}" alt="picture waiters working">
                    <img class="training__image training__image--2" src="${img_2}" alt="picture waiter serving drink">
                    <img class="training__image training__image--3" src="${img_3}" alt="picture times">

                    <div class="training__box">
                        <div>
                        <h3 class="training__box-role heading-quertenary">${training.location}</h3>
                        <h4 class="training__box-location heading-tertiary"> ${training.role} </h4>
                        </div>
                        <div>
                            <p class="training__box-duration"><span class="text-bold">Duration: </span>${training.duration}</p>
                            <p class="training__box-rate">
                            <span class="text-bold">Earning potential : </span> ${training.rate}£ per hour
                            </p>
                            <p class="training__box-date"><span class="text-bold">Next training: </span> ${training.date}</p>
                            <p class="training__box-description"> ${training.description} </p>
                        </div>
                       
                        <button class="btn training__box-btn">Book now!</button>
                    </div>
                </div>
          `;
      })
      .join('');
  }

  #generateMarkupDots() {
    return this._data.map((_, index) => `<button class="dot" data-dot=${index}></button>`).join('');
  }

  goToElement(goTo) {
    this.#trainings.forEach((training, id) => {
      training.style.transform = `translateX(${100 * (id - goTo)}%)`;
    });
    this.#activateDots(goTo);
  }

  #activateDots(activeDot) {
    this.#dots.forEach((dot) => dot.classList.remove('dot--active'));
    document.querySelector(`.dot[data-dot="${activeDot}"]`).classList.add('dot--active');
  }

  #setResizeObserver() {
    const highestElement = Array.from(this.#trainings).reduce((accumulator, current) =>
      current.getBoundingClientRect().height > accumulator.getBoundingClientRect().height ? current : accumulator
    );
    const resizeObserver = new ResizeObserver((entries) => {
      highestElement.parentElement.style.height = `${highestElement.getBoundingClientRect().height}px`;
    });
    resizeObserver.observe(highestElement);
  }

  addBtnsListeners(handlerPrevious, handlerNext) {
    this.#btnPrevious?.addEventListener('click', handlerPrevious);
    this.#btnNext?.addEventListener('click', handlerNext);
  }

  addDotsListeners(handler) {
    this.#dotsContainer?.addEventListener('click', function (e) {
      if (e.target.classList.contains('dot')) {
        const pressedDot = e.target;
        const dotNumber = pressedDot.dataset.dot;
        handler(dotNumber);
      }
    });
  }
}

export default new TrainingView();
