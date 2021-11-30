import img from 'url:../../img/team-1.jpg';
import img2 from 'url:../../img/team-2.jpg';
import img3 from 'url:../../img/team-3.jpg';
import img4 from 'url:../../img/team-3.jpg';
import img5 from 'url:../../img/team-2.jpg';
import img6 from 'url:../../img/team-1.jpg';



class ModelTeam {
    #members;
    constructor() {

        this.#members = [{
            name: "Manea Valentin Cornel",
            role: "Co-Founder & Operation Director",
            img: img
        }, {
            name: "Manea Ioana Alexandra",
            role: "Co-Founder & Operation Director",
            img: img2
        }, {
            name: "Manea Radu Catalin",
            role: "Co-Founder & Operation Director",
            img: img3
        }, {
            name: "George Marian",
            role: "Co-Founder & Operation Director",
            img: img4
        }, {
            name: "Anca Niculae",
            role: "Co-Founder & Operation Director",
            img: img5
        }, {
            name: "Kristof Selecz",
            role: "Co-Founder & Operation Director",
            img: img6
        }];
    }


    get members() {
        return this.#members;
    }



}

export default new ModelTeam();