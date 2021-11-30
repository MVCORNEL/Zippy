import View from './View';

class TraitsView extends View{
    _parentElement = document.querySelector('.team__characteristics');

    _generateMarkup() {
        return this._data.map( trait =>  `<li>${trait}</li>`).join(' ');
    }

}

export default new TraitsView();