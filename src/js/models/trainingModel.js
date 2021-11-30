class ModelTraining {
    #trainings;
    #currentElement;

    constructor() {
        this.#currentElement=0;
        this.#trainings = [
            {
                location: 'London',
                role: 'Bartender',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
                img: ["img-1", "img-2", "img-3"]
            },
            {
                location: 'London',
                role: 'Waiter',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur !',
                imgs: ["img-1", "img-2", "img-3"]
            },
            {
                location: 'Londons',
                role: 'CARPENTER 1',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
                imgs: ["img-1", "img-2", "img-3"]
            },
            {
                location: 'Londons',
                role: 'CARPENTER 1',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
                imgs: ["img-1", "img-2", "img-3"]
            },
        ];
    }

    get currentElement(){
        return this.#currentElement;
    }

    get trainings(){
        return this.#trainings;
    }

    nextTraining() {
        this.#currentElement = (this.#currentElement + 1) % this.#trainings.length;
        return this.currentElement;
    }
    
    previousTraining() {
        if (this.#currentElement === 0) {
            this.#currentElement = this.#trainings.length - 1;
        } else {
            this.#currentElement--;
        }
        return this.#currentElement;
    }

    goTo(element){
        this.#currentElement=element;
        return this.#currentElement;
    }

}


export default new ModelTraining();




