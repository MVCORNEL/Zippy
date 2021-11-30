import Form from './form';

class FormViewContact extends Form {

    _form = document.getElementById('form-contact');
    #firstName = document.getElementById('fname');
    #lastName = document.getElementById('lname');
    #email = document.getElementById('email');
    #phone = document.getElementById('phone');
    #message = document.getElementById('message');


    _validateForm() {
        const inputELements = [this.#firstName, this.#lastName, this.#email, this.#phone, this.#message];
        //Check for blanks
        for (let input of inputELements) {
            this._checkBlank(input);
        }
        //Check for email validation if it is not null
        if (this.#email.value.trim() !== '') {
            this._checkEmail(this.#email);
        }
    }

}


export default new FormViewContact();