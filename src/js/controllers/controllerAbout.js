import cardModel from './../models/cardModel';
import cardView from './../views/cardView';
import teamView from './../views/teamView';
import teamModel from '../models/teamModel';
import traitsView from './../views/traitsView';
import traitsModel from '../models/traitsModel';

const controlShowCard = function () {
    const cardsCount = cardModel.cards.length;
    if (cardsCount == 0) {
        return;
    }
    let current = 0;
    cardView.render(cardModel.cards[current]);
    setInterval(function () {
        current++;
        current = current % cardsCount;
        cardView.render(cardModel.cards[current]);
    }, 3000)
}

export const initAbout = function () {
    // //CARD
    controlShowCard();
    // // //TEAM
    teamView.render(teamModel.members);
    traitsView.render(traitsModel.traits);
}