import 'core-js/stable'; //will polyfill everything
import 'regenerator-runtime/runtime'; //async/awaiit
import { initIndex } from './controllerIndex';
import { initAbout } from './controllerAbout';
import { initContact } from './controllerContact';
import { initJobify } from './controllerJobify';
import { initAuth } from './controllerLogin';
import Navigation from './../views/navigationView';

// //PARCEL -> dont reload the pafe entirely on change, just the change itself
// //state of the page remains, doesn't fully reload on change
// if (module.hot) {
//     module.hot.accept();
//   }

const page = document.body.id;
switch (page) {
  case 'index':
    initIndex();
    new Navigation(page);
    break;
  case 'jobify':
    initJobify();
    new Navigation(page);
    break;
  case 'about':
    initAbout();
    new Navigation(page);
    break;
  case 'contact':
    initContact();
    new Navigation(page);
    break;
  case 'authentification':
    initAuth();
    break;
}
