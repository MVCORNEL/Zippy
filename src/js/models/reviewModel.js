import img from 'url:../../img/user-1.jpg';
import img2 from 'url:../../img/user-2.jpg';
import img3 from 'url:../../img/user-3.jpg';
import img4 from 'url:../../img/user-4.jpg';
import img5 from 'url:../../img/user-5.jpg';
import img6 from 'url:../../img/user-6.jpg';


class ReviewModel {
    #reviews;
    #currentElement;
    #elementsPerPage = 3;

    constructor() {

        this.#currentElement = 0;
        this.#reviews = [
            {
                name: 'Radu Manea',
                email: '',
                role: 'Waiter',
                date: 'Sept 13th, 2017',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo tenetu voluptate consequuntur rem veniam. Expedita nostrum saepe eius error delectus molestiae blanditiis, alias sequi! Pariatur cupiditate nisi sint soluta!',
                rating: 4,
                img: img,
            },
            {
                name: 'Ioana Alexandra',
                email: '',
                role: 'Security',
                date: 'Oct 2nd, 1993',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo tenetu voluptate consequuntur rem veniam. Expedita nostrum saepe eius error delectus molestiae blanditiis, alias sequi! Pariatur cupiditate nisi sint soluta!',
                rating: 5,
                img: img2,
            },
            {
                name: 'Valentin Cornel Manea',
                email: '',
                role: 'Barista',
                date: 'Sept 13th, 2017',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo tenetu voluptate consequuntur rem veniam. Expedita nostrum saepe eius error delectus molestiae blanditiis, alias sequi!',
                rating: 5,
                img: img3,
            },
            {
                name: 'Kristof Selectz',
                email: '',
                role: 'Waitress',
                date: 'Sept 13th, 2017',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo tenetu voluptate consequuntur rem veniam. Expedita nostrum saepe eius error delectus molestiae blanditiis, alias sequi! Pariatur cupiditate nisi sint soluta!',
                rating: 4,
                img: img4,
            },
            {
                name: 'Radu Manea',
                email: '',
                role: 'Bartender',
                date: 'Sept 13th, 2017',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo tenetu voluptate consequuntur rem veniam.',
                rating: 5,
                img: img5,
            },
            {
                name: 'Radu Manea',
                email: '',
                role: 'Waiter',
                date: 'Sept 13th, 2017',
                comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nostrum saepe eius error delectus molestiae blanditiis, alias sequi! Pariatur cupiditate nisi sint soluta!',
                rating: 4,
                img: img6,
            }
        ]
    }

    setElementsPerPage(isSmallDevice = false) {
        if (isSmallDevice) {
            this.#elementsPerPage = 1;
        } else { 
            this.#elementsPerPage = 3;   
        }
    }

    nextElement() {
        if (this.#currentElement < this.#reviews.length - this.#elementsPerPage) {
            return ++this.#currentElement;
        }
        return -1;
    }

    previousElement() {
        if (this.#currentElement != 0) {
            return --this.#currentElement;
        }
        return -1;
    }

    get reviews() {
        return this.#reviews;
    }

    get currentElement(){
        return this.#currentElement
    }

    getElementsLeft(){
        const leftElements=this.#reviews.length-this.#currentElement-this.#elementsPerPage;
        if(leftElements>0){
            return leftElements;
        }
        return 0;
    }

  

    

}

export default new ReviewModel();