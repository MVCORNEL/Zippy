import icons from 'url:../../img/sprite.svg';
import View from './View';

class GigView extends View {

    //ALL THIS ELMENTS WILL BI INITIALIZED AFTER THE MARKUP WAS RENDER, THEY WON'T EXIST PRIOR TO THAT
    _parentElement = document.querySelector('.section-gigs');
    _errorMessage = 'There are not slides to be displayed';

    render(data, goTO = 0) {
        if (super.render(data)) {
            this.#addMoreListener(this.#showHide);
        }
    }

    _generateMarkup() {
        return this._data.map((gig, index) =>
            `<div class="gig">

        <img class="gig__logo" src="${gig.logo}">
        <div class="gig__box">
            <div class="gig__header">
                <span class="gig__header-title">${gig.role}</span>
                <button class="gig__header-apply btn btn--gig">Apply</button>
            </div>

            <div class="gig__detail text-important">
                <svg class="gig__icon">
                    <use xlink:href="${icons}#icon-location-pin"></use>
                </svg>
                <span>${gig.address}</span>
            </div>

            <div class="gig__detail text-important">
                <svg class="gig__icon">
                    <use xlink:href="${icons}#icon-credit"></use>
                </svg>
                <span>${gig.rate}</span>
            </div>

            <div class="gig__detail text-important">
                <svg class="gig__icon">
                    <use xlink:href="${icons}#icon-calendar"></use>
                </svg>
                <span>${gig.date}</span>
            </div>

            <p class="gig__text gig__text-description">${gig.description}</p>

            <div class="gig__equipment">
                ${this.#generateEquipment(gig.equipment)}
            </div>

            <span class="text-important gig__more btn-text">more &rarr; </span>

        </div>
    </div>`);
    }

    #generateEquipment(data) {
        return data.map((equipment, index) => `
            <div class="gig__cloth">
             <img class="gig__cloth-img" src="${equipment.img}">
             <span class="gig__cloth-title">${equipment.type}</span>
           </div>`).join('');
    }


    #showHide(e){
      
        if(e.target.classList.contains('gig__more')){
            const gigParent=e.target.closest('.gig');
            const gigBox=gigParent.querySelector('.gig__box');
            gigBox.classList.toggle('gig__box--active');
         

        }
 

    }

    #addMoreListener(handler){
        this._parentElement.addEventListener('click',handler);  
    }

}


export default new GigView();