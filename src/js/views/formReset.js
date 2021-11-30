import Form from './form';

class ResetForm extends Form {

    _form= document.getElementById('form-reset');
    #overlay = document.querySelector('.overlay');
    #exit = document.getElementById('exit-reset');
    #email = document.getElementById('email-reset');

    constructor(){
        super();
        this.#overlay?.addEventListener('click',function(){
            this.hideForm();
        }.bind(this));
        
        document.addEventListener('keydown', function(e){
            if(e.key==='Escape' && !this._form.classList.contains('hidden')){
                this.hideForm();
            }
        }.bind(this));
    }

    _validateForm() { 
        this._checkBlank(this.#email);
        //Check for email validation if it is not null
        if (this.#email.value.trim() !== '') {
            this._checkEmail(this.#email);
        }
    }

    showForm() {
        this._form.classList.remove('hidden');
        this.#overlay.classList.remove('hidden');
    }

    hideForm() {
        this._form.classList.add('hidden');
        this.#overlay.classList.add('hidden');
    }

    addExitListener(handler) {
        this.#exit.addEventListener('click', handler);
    }


    

}

export default new ResetForm();