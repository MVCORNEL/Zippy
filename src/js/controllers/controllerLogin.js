import sliderModel from './../models/slideModel';
import sliderView from '../views/sliderView';
import formLogin from './../views/formLogin';
import formRegister from './../views/formRegister';
import formReset from './../views/formReset';

//SLIDER
const controlNextSlide = () => {
    sliderView.goToElement(sliderModel.nextSlide());
}
const controlDotPressed = (element) => {
    sliderView.goToElement(sliderModel.goTo(element));
}
const controlSlidesInterval = () => {
    setInterval(function () {
        controlNextSlide();
    }, 7000);
}
const controlShowLogin = () => {
    formRegister.showRegister();
    formLogin.hideRegister();
}
const cotrolShowRegister = () => {
    formRegister.hideRegister();
    formLogin.showRegister();
}
const controlShowReset = () => {
    formReset.showForm();
}
const controlHideReset = () => {
    formReset.hideForm();
}

export const initAuth = function () {
    //SLIDES
    const slides = sliderModel.slides;
    sliderView.render(slides);
    sliderView.addDotsListeners(controlDotPressed);
    controlSlidesInterval();
    
    //FORM LOGIN
    formLogin.addSubmitListener(() => {
        console.log("post request for the server");
    });
    formLogin.addOpenRegisterListener(controlShowLogin);
    formLogin.addForgotPasswordListener(controlShowReset);

    // //FORM REGISTER
    formRegister.addOpenLoginListener(cotrolShowRegister);
    formRegister.addSubmitListener(() => {
        console.log("post request for the server");
    });

    //FORM RESET
    formReset.addSubmitListener(() => {
        console.log("post request for the server");
    });
    formReset.addExitListener(controlHideReset);
}