import View from './View';

class SlideView extends View {

    //ALL THIS ELMENTS WILL BI INITIALIZED AFTER THE MARKUP WAS RENDER, THEY WON'T EXIST PRIOR TO THAT
    _parentElement = document.querySelector('.authentification__slider');
    _slides = document.querySelector('.slides');
    _errorMessage = 'There are not slides to be displayed';
    #slides;
    #dotsContainer;
    #dots;


    render(data, goTO = 0) {
        if (super.render(data)) {
            this.#initDOM();
            this.#setResizeObserver();
            this.goToElement(goTO);
            this.#activateTransition();
        }
    }

    #initDOM() {
        this.#dotsContainer = document.querySelector('.authentification__slider-dots');
        this.#slides = this._parentElement.querySelectorAll('.slide');
        this.#dots = this._parentElement.querySelectorAll('.dot');
    }

    _generateMarkup() {
        return `
        <div class="slides">
                ${this.#generateMarkupSlide()}
        </div>
        <div class="authentification__slider-dots">
                ${this.#generateMarkupDots()}
        </div>`;
    }

    #generateMarkupSlide() {
        return this._data.map((slide, index) => {
            return `
            <div class="slide">
                <img class="slide-img" src="${slide.img}">
                <h1 class="slide-header heading-primary">${slide.title}</h1>
                <p class="slide-text text-important"> ${slide.description}</p>
            </div>`;
        }).join('');
    }

    #generateMarkupDots() {
        return this._data.map((_, index) =>
                `<button class="dot" data-dot=${index}></button>`)
            .join('');
    }

    goToElement(goTo) {
        this.#slides.forEach((slide, id) => {
            slide.style.transform = `translateX(${100*(id-goTo)}%)`;
        });
        this.#activateDots(goTo);
    }

    #activateTransition() {
        setTimeout(() => {
            this.#slides.forEach((slide, id) => {
                slide.style.transition = ' transform 1s';
            });
        }, 1000);
    }

    #activateDots(activeDot) {
        this.#dots.forEach((dot) => dot.classList.remove('dot--active-white'));
        document.querySelector(`.dot[data-dot="${activeDot}"]`).classList.add("dot--active-white");
    }

    #setResizeObserver() {
        const highestElement = Array.from(this.#slides).reduce((accumulator, current) =>
            current.getBoundingClientRect().height > accumulator.getBoundingClientRect().height ? current : accumulator);
        const resizeObserver = new ResizeObserver(entries => {
            highestElement.parentElement.style.height = `${highestElement.getBoundingClientRect().height}px`;
        });
        resizeObserver.observe(highestElement);
    }

    addDotsListeners(handler) {
        this.#dotsContainer ?.addEventListener('click', function (e) {
            if (e.target.classList.contains('dot')) {
                const pressedDot = e.target;
                const dotNumber = pressedDot.dataset.dot;
                handler(dotNumber);
            }
        });

    }

}


export default new SlideView();