class CardModel {

    #cards;

    constructor() {

        this.#cards = [{
                img: '#icon-coffee',
                title: 'Organized & Reliable',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo, optio natus reprehenderit ex velit saepe fuga ullam excepturi.'
            },
            {
                img: `#icon-navigation`,
                title: 'Flexible',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos dolorum, maiores nobis sed in laudantium, saepe ea magnam fuga facere.'
            },
            {
                img: '#icon-pig',
                title: 'Supportive & cooperative',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at suscipit fuga. Quidem autem praesentium quo maiores!.'
            }
        ]

    }

    get cards(){
        return this.#cards;
    }
}

export default new CardModel();