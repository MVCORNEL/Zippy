import Form from './form';

class FormRegister extends Form {
    _form = document.getElementById('form-register');
    //FIELDS
    #fname = document.getElementById('fname-register');
    #lname = document.getElementById('lname-register');
    #email = document.getElementById('email-register');
    #phone = document.getElementById('phone-register');
    #password = document.getElementById('password-register');
    #retypedPassword = document.getElementById('rpassword-register');
    // #role = document.getElementById('role-register');
    // #availability = document.getElementById('availability-register');
    // #cv = document.getElementById('cv-register');
    #terms = document.getElementById('terms-register');
    #login=document.querySelector('.form__link--login');

    _validateForm() {
  
        const inputFields = [this.#fname, this.#lname, this.#email, this.#phone, this.#password, this.#retypedPassword];
        for (let input of inputFields) {
            this._checkBlank(input);
        }

        if (this.#password.value.trim() !== '') {
            this._checkPassword(this.#password);
        }

        if (this.#password.value.trim() !== '' && this.#retypedPassword.value.trim() !== '') {
            this._checkRetypedPassword(this.#password, this.#retypedPassword);
        }
        this.__checkTerms();
    }

    _checkRetypedPassword(passwordInput, retypedPassword) {
        const passwordValue = passwordInput.value.trim();
        const retypedPasswordValue = retypedPassword.value.trim();

        if (passwordValue !== retypedPasswordValue) {
            this._isValid = false;
            this._setErrorFor(retypedPassword, 'Passwords do not match! ');
        }
    }

    __checkTerms() {
        console.log(this.#terms.checked);
        if (this.#terms.checked) {
            document.querySelector('.form__input-msg--terms').style.visibility = 'hidden';

        } else {
            this._isValid = false;
            document.querySelector('.form__input-msg--terms').style.visibility = 'visible';
        }
    }

    showRegister() {
        this._form.classList.remove('gone');
    }

    hideRegister() {
        this._form.classList.add('gone');
    }

    addOpenLoginListener(handler){
        this.#login.addEventListener('click', function(e){
            e.preventDefault();
            handler();
        });
    }
}

export default new FormRegister();