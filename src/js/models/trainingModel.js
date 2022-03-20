class ModelTraining {
  #trainings;
  #currentElement;

  constructor() {
    this.#currentElement = 0;
    this.#trainings = [
      {
        role: 'Bartender',
        location: 'London',
        rate: '10/14',
        duration: '2 weeks',
        date: '21 December',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
        img: ['img-1', 'img-2', 'img-3'],
      },
      {
        role: 'Waiter',
        location: 'London',
        rate: '10/12',
        duration: '3 days',
        date: '19 December',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur !',
        imgs: ['img-1', 'img-2', 'img-3'],
      },
      {
        role: 'Barista',
        location: 'London',
        rate: '10/14',
        duration: '4 days',
        date: '1 January',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
        imgs: ['img-1', 'img-2', 'img-3'],
      },
      {
        role: 'Receptionist',
        location: 'London',
        rate: '12/14',
        duration: '1 week',
        date: '3 September',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus expedita culpa perferendis earumanimi repudiandae illo rem est harum nisi? Lorem ipsum dolor sit, amet consectetur ! ',
        imgs: ['img-1', 'img-2', 'img-3'],
      },
    ];
  }

  get currentElement() {
    return this.#currentElement;
  }

  get trainings() {
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

  goTo(element) {
    this.#currentElement = element;
    return this.#currentElement;
  }
}

export default new ModelTraining();
