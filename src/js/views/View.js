import icons from 'url:../../img/sprite.svg'; //Parcel 2


export default class View {

    _data;
    _parentElement;
    _errorMessage;

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) {
            this.#renderError();
            return false;
        }
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        return true
    }

    #renderError(message = this._errorMessage) {
        const markup = `        
        <div class="error">
            <div>
              <svg class="error-icon">
                <use href="${icons}#icon-warning"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    _generateMarkup() {
        throw new Error('You have to implement the method generateMarkup');
    };




    // #renderError(message = this._errorMessage) {
    //     const markup = `        
    //             <div class="error">
    //                 <div>
    //                   <svg>
    //                     <use href="${icons}#icon-alert-triangle"></use>
    //                   </svg>
    //                 </div>
    //                 <p>${message}</p>
    //             </div>`;
    //     this._clear();
    //     this._parentElement.insertAdjacentHTML('afterbegin', markup);
    //   }



}