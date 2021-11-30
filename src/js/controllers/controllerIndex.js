import trainingModel from './../models/trainingModel';
import trainingView from './../views/trainingView';
import reviewModel from './../models/reviewModel';
import reviewView from './../views/reviewView';

//TRAININGS
const controlPreviousTrain = () => {
    console.log("called");
    trainingView.goToElement(trainingModel.previousTraining());
}
const controlNextTrain = () => {
    trainingView.goToElement(trainingModel.nextTraining());
}

const controlDotPressed = (element) => {
    trainingView.goToElement(trainingModel.goTo(element));
}

//REVIEWS
const controlPreviousReview = () => {
    reviewView.moveTo(reviewModel.previousElement(), reviewModel.getElementsLeft());
    reviewModel
}
const controlNextReview = () => {
    reviewView.moveTo(reviewModel.nextElement(), reviewModel.getElementsLeft());
}

const controlOnScreenChange = function (iSmallScreen) {
    let lastElements = reviewModel.getElementsLeft();
    reviewModel.setElementsPerPage(iSmallScreen);
    //when the config is on small device and and te current element is the last or penultimate, and the configuration cahnges to a big devices the reviews won't be centered.
    if (!iSmallScreen) {

        if (lastElements === 0) {
            reviewView.moveTo(reviewModel.previousElement(), reviewModel.getElementsLeft());
            reviewView.moveTo(reviewModel.previousElement(), reviewModel.getElementsLeft());
        }
        if (lastElements === 1) {
            reviewView.moveTo(reviewModel.previousElement(), reviewModel.getElementsLeft());
        }

    }
    //RE-CENTERED, purpose sometimes
    reviewView.moveTo(reviewModel.currentElement, reviewModel.getElementsLeft());
}

export const initIndex= function () {
    //TRAININGS
    const trainings = trainingModel.trainings;
    trainingView.render(trainings);
    trainingView.addBtnsListeners(controlPreviousTrain, controlNextTrain);
    trainingView.addDotsListeners(controlDotPressed);
    //REVIEWS
    const reviews = reviewModel.reviews;
    reviewView.render(reviews);
    reviewView.onChangeScreenSize(controlOnScreenChange);
    reviewView.addBtnListeners(controlPreviousReview, controlNextReview);
}