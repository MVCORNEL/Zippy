import img_1 from 'url:../../img/login-1.png';
import img_2 from 'url:../../img/login-2.png';
import img_3 from 'url:../../img/login-3.png';


class ModelTraining {
    #slides;
    #currentSlide;

    constructor() {
        this.#currentSlide=0;
        this.#slides = [
            {
                title: 'Team-Oriented',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
                img: img_1
            },
            {
                title: 'Professional',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur !',
                img: img_2
            },
            {
                title: 'Proactive',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
                img: img_3
            },
        ];
    }

    get currentSlide(){
        return this.#currentSlide;
    }

    get slides(){
        return this.#slides;
    }

    nextSlide() {
        this.#currentSlide = (this.#currentSlide + 1) % this.#slides.length;
        return this.currentSlide;
    }
    
    previousSlide() {
        if (this.#currentSlide === 0) {
            this.#currentSlide = this.#slides.length - 1;
        } else {
            this.#currentSlide--;
        }
        return this.#currentSlide;
    }

    goTo(slide){
        this.#currentSlide=slide;
        return this.#currentSlide;
    }

}


export default new ModelTraining();
