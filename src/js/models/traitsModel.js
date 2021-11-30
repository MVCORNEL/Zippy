class TraitsModel {
    
    #traits;

    constructor() {
        this.#traits = [
            'Effective technology',
            'Professional team ',
            'Successful management',
            'People skills',
            'Effective marketing',
            'High Level of Confidence',
        ];
    }


    get traits() {
        return this.#traits;
    }



}

export default new TraitsModel();