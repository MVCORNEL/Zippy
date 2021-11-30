import Map from './../helpers/map';
import form from './../views/formContact';

const setupMap = () => {
  const map = new Map();
  map.createMap();
  map.setTiles();
  map.setMarker();
}

export const initContact = function () {
  setupMap();
  
  form.addSubmitListener(() => {
    console.log("Post request for the server");
  });

}