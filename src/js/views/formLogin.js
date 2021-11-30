import Form from './form';

class FormLogin extends Form {

    _form = document.getElementById('form-login');
    #email = document.getElementById('email-login');
    #password = document.getElementById('password-login');
    #register = document.getElementById('register-login');
    #reset=document.getElementById('reset-login');
    _validateForm() {
        const inputFields = [this.#email, this.#password];
        for (let input of inputFields) {
            this._checkBlank(input);
        }
        //Check for email validation if it is not null
        if (this.#email.value.trim() !== '') {
            this._checkEmail(this.#email);
        }
        this._checkPassword(this.#password);
    }

    showRegister() {
        this._form.classList.remove('gone');
    }

    hideRegister() {
        this._form.classList.add('gone');
    }


    addOpenRegisterListener(handler){
        this.#register.addEventListener('click',function(e){
            //prevent going to the hash #
            e.preventDefault();
            handler();
        });
    }

    addForgotPasswordListener(handler){
        this.#reset.addEventListener('click', function(e){
            e.preventDefault();
            handler();
        });

    }

}

export default new FormLogin();