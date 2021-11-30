import icons from 'url:../../../src/img/sprite.svg';
import View from './View';
class CardView extends View {

    _parentElement = document.querySelector('.card');

    _generateMarkup() {
        console.log();
        return `                    
            <svg class="card__image">
                <use xlink:href="${icons}${this._data.img}"></use>
            </svg>
            <span class="card__title">${this._data.title}</span>
            <soan class="card__description">${this._data.description}</span>
            `
    }

}

export default new CardView();