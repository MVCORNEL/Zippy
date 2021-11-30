import icons from 'url:../../img/sprite.svg';
import View from './View';
class ReviewView extends View {
    _parentElement = document.querySelector('.slider');
    #reviews;
    #btnNext;
    #btnPrevious;

    #SCREEN_BREAKPOINT = 1200;
    #GUTTER_SCREEN_BIG = 5 * 100 / 30; // 30% 5% 30% 5 30% 5% 30% -> 30% represets the width of the review based on its parent and 5% the gutter
    #GUTTER_SCREEN_SMALL = 5 * 100 / 100; // 100% 5% 100% 5% 100% 5% 100%
    #gutter;
    #smallScreenQUERY;

    render(data, index = 0) {
        if (super.render(data)) {
            this.#initDOM();
            this.#initMediaQuery()
            this.moveTo(index);
        };
    }

    #initDOM() {
        this.#reviews = document.querySelectorAll('.review');
        this.#btnNext = document.querySelector('.slider__btn-next');
        this.#btnPrevious = document.querySelector('.slider__btn-previous');
    }

    _generateMarkup() {
        return `
        <div class="reviews">
            ${this.#generateMarkupReviews()}
        </div>   

        <div class="slider__nav">
                <button type="button" class="slider__btn-previous btn-arrow ">&larr;</button>
                <button type="button" class="slider__btn-next btn-arrow">&rarr;</button>
        </div>`;
    }

    #generateMarkupReviews() {
        return this._data.map((review, index) => {
            return `             
            <div class="review">
                <img src="${review.img}" alt="review image" class="review__image">
                <div class="review__box">
                    <p class="review__name heading-tertiary">${review.name}</p>
                    <p class="review__logo">logo</p>
                </div>

                <div class="review__box">
                    <p class="review__role heading-quertenary">${review.role}</p>
                    <div class="review__stars">
                        ${this.#generateMarkupStar(review.rating)}
                    </div>
                </div>

                <div class="review__box review__box--quote">
                    <svg class="review__quote">
                        <use xlink:href="${icons}#icon-quote"></use>
                    </svg>
                    <span class="review__line">
                    </span>
                </div>

                <p class="review__comment">${review.comment}
                </p>
            </div>`
        }).join('');
    }

    #generateMarkupStar(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `
            <svg class="review__star review__star${rating>i ? "--active" : "--inactive"}">
                <use xlink:href="${icons}#icon-star"></use>
            </svg>`;
        }
        return stars;
    }

    moveTo(goTo, itemsLeft) {
        if (goTo === -1) {
            return;
        }
        this.#reviews.forEach(review => {
            review.style.transform = `translateX(${-goTo * (100 + this.#gutter )}%)`;
        });

        this.#toggleBtns(goTo, itemsLeft);
        this.#showFadeReviews(goTo);

    }

    #toggleBtns(currentElement, itemsLeft) {
        currentElement === 0 ? this.#btnPrevious ?.classList.remove("btn-arrow--active") : this.#btnPrevious ?.classList.add("btn-arrow--active");
        itemsLeft === 0 ? this.#btnNext.classList ?.remove("btn-arrow--active") : this.#btnNext ?.classList.add("btn-arrow--active");
    }

    #showFadeReviews(slide) {
        //everything is fadded at this point
        this.#reviews.forEach((review, index) => review.classList.add('review--faded'));
        //For small and for big one deactivate the fade the current slide
        this.#reviews[slide] ?.classList.remove('review--faded');
        if (!this.#smallScreenQUERY.matches) {
            this.#reviews[slide + 1] ?.classList.remove('review--faded');
            this.#reviews[slide + 2] ?.classList.remove('review--faded');

        }
    }

    #initMediaQuery() {
        this.#smallScreenQUERY = window.matchMedia(`(max-width:${this.#SCREEN_BREAKPOINT}px)`);
    }

    #setGutters(smallScreen = false) {
        if (smallScreen) {
            this.#gutter = this.#GUTTER_SCREEN_SMALL;
        } else {
            this.#gutter = this.#GUTTER_SCREEN_BIG;
        }
    }

    onChangeScreenSize(handler) {
        //CONFIG BEFORE THE LISTENER IS WORKING TO SET A DEFAULT CONFIG
        this.#setGutters(this.#smallScreenQUERY ?.matches);
        handler(this.#smallScreenQUERY ?.matches);
        this.#smallScreenQUERY ?.addEventListener('change', function (e) {
            this.#setGutters(e.matches);
            handler(e.matches);
        }.bind(this));
    }


    addBtnListeners(handlerPrevious, handlerNext) {
        this.#btnNext ?.addEventListener('click', handlerNext);
        this.#btnPrevious ?.addEventListener('click', handlerPrevious);
    }

}

export default new ReviewView();

