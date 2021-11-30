export default class Form {
    _form;
    _isValid;

    addSubmitListener(handler) {
        this._form.addEventListener('submit', function (e) {
            e.preventDefault();
            this._isValid=true;

            this._validateForm();

            if (!this._isValid) {
                e.preventDefault();
            } else {
                alert("Message successfully sent");
                handler();
            }
        }.bind(this));
    }

    _checkBlank(input) {
        const inputValue = input.value.trim();
        if (inputValue === '') {
            const label= input.parentElement.getElementsByTagName('label')[0];
            this._setErrorFor(input, `${label?.textContent} cannot be empty `);
            this._isValid = false;
        } else {
            this._setSuccesFor(input);
        }
    }

    _checkEmail(input) {
        const inputValue = input.value.trim();
        //  PERSONALLY DESIGNED SOLUTION.THE SOLUTION SHOULD COVER ALMOST EVERY NON-FANCY EMAIL ADDRESSES.
        //  WARNING -> NEGATIVE LOOK BEHIND WAS USED IN THE LAST PART OF THE REGEX. WHICH MAY NOT BE FULLY SUPPORTED BY THE OLD VERSION OF THE BROWSERS.
        //  SOLUTION DOESN'T VALIDATE: SPACES WITHIN THE QUOTES, DOUBLE DOTS BETWEEN THE QUOTES, COMMENTS AND IP ADDRESSES AS DOMAINS.
        //  REGEX  :  ^(?!\.)([a-zA-Z0-9]|[!#=%&_'`/~\*\$\+\-\?\^\{\|\}]|\.(?!\.|@)){1,64}@(?!\-|,)(([a-zA-Z0-9]|\.(?!\.)|(\-|,)(?!\-|,))){1,256}(?<!\.|,|\-)$
        //	EACH EMAIL ADDRESS IS COMPUND BY 3 ELEMENTS-> [LOCAL-PART][@][DOMAIN-PART] 
        //  1 LOCAL-PART 
        //  ^(?!\.)([a-zA-Z0-9]|[!#=%&_'`/~\*\$\+\-\?\^\{\|\}]|\.(?!\.|@)){1,64}
        //  ^  :  beginning of the string
        // 	(?!\.)  :  first character cannot be dot.
        //  [a-zA-Z0-9]  :  lower case and uppercase letters a to z and A to Z, but also digits from 0 to 9 are allowed.
        //  [!#=%&_'`/~\*\$\+\-\?\^\{\|\}] : all printable characters allowed for a valid email local part. All java-script special characters were escaped by using backslash(\).
        //  .(?!.|@)  :  dot character cannot be followed by another dot(.) cahracter or at(@) character.Look ahead negative checks the following element in case the current element is dot(.) and validates true only if the following elements are not . or @.
        //  {1,64}  :  range specified must be between minimum one character maximum 64.
        //  2 @-PART
        //  @(?!\-|,)  :  At(@) character cannot be follow by - or , character. That is more a domain rules, handled here in advance, in order to not use negative look behind in domain part.
        //  3 DOMAIN-PART
        //  (([a-zA-Z0-9]|\.(?!\.)|(\-|,)(?!\-|,))){1,256}(?<!\.|,|\-)$ 
        //  [a-zA-Z0-9]  :  rage of character lower case and uppercase letters a to z and A to Z, but also digits from 0 to 9 are allowed.
        //  \.(?!\.)  :  dot can be used, but only if it is not followed by another dot. Negative look ahead assertion used.
        //  (\-|,)(?!\-|,)  :  Dash and comma can be used only if they are not followed by another dash or comma. Negative look ahead assertion used .
        const EMAIL_REGEX = /^(?!\.)([a-zA-Z0-9]|[!#=%&_'`/~\*\$\+\-\?\^\{\|\}]|\.(?!\.|@)){1,64}@(?!\-|,)(([a-zA-Z0-9]|\.(?!\.)|(\-|,)(?!\-|,))){1,256}(?<!\.|,|\-)$/;
        if (EMAIL_REGEX.test(inputValue) === false) {
            this._setErrorFor(input, `Email has a wrong format `);
            this._isValid = false;
        }
    }
    
    _checkPassword(passwordInput) {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length > 8===false) {
            this._setErrorFor(passwordInput, 'Password at least 8 characters long');
            this._isValid = false;
        }
    }

    _setErrorFor(input, message) {
        const formControl = input.parentElement;
        let spanMsg = formControl.querySelector('.form__input-msg');
        spanMsg.textContent = message;
        input.className = 'form__input form__input--incorrect';

    }

    _setSuccesFor(input) {
        input.className = 'form__input form__input--correct';
    }

    



}