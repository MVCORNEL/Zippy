import img_1 from 'url:../../img/suite.jpg';
import img_2 from 'url:../../img/suite.jpg';
import img_3 from 'url:../../img/suite.jpg';
import logo_1 from 'url:../../img/seenon-4.png';
import logo_2 from 'url:../../img/seenon-2.png';
import logo_3 from 'url:../../img/seenon-3.png';

class GigModel {
    #gigs;

    constructor() {

        this.#gigs = [{
                role: 'Waiter/Watress',
                rate: '10.5£ per hour',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo, optio natus reprehenderit ex velit saepe fuga ullam excepturi.',
                date: '13 November 7:00AM - 2:00PM',
                logo: logo_1,
                equipment: [{
                        type: 'shirt',
                        img: img_1
                    },
                    {
                        type: 'trousers',
                        img: img_2
                    },
                    {
                        type: 'shirt',
                        img: img_3
                    }
                ]
            },
            {
                role: 'Striker',
                rate: '10.5£ per hour',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo, optio natus reprehenderit ex velit saepe fuga ullam excepturi.',
                date: '13 November 7:00AM - 2:00PM',
                logo: logo_2,
                equipment: [{
                        type: 'shirt',
                        img: img_1
                    },
                    {
                        type: 'trousers',
                        img: img_2
                    },
                    {
                        type: 'shirt',
                        img: img_3
                    }
                ]
            },
            {
                role: 'Barista',
                rate: '11£ per hour',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo, optio natus reprehenderit ex velit saepe fuga ullam excepturi.',
                date: '13 November 7:00AM - 2:00PM',
                logo: logo_3,
                equipment: [{
                    type: 'shirt',
                    img: img_1
                },
                {
                    type: 'trousers',
                    img: img_2
                },
                {
                    type: 'shirt',
                    img: img_3
                }]
            }
        ]
    }

    get gigs() {
        return this.#gigs;
    }
}

export default new GigModel();