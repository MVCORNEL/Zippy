import Leaflet from 'leaflet';

export default Map = function(){
    this.coords=[51.505,-0.09];
    this.scale=13;
}

Map.prototype.createMap=function(){
    this.map=Leaflet.map('map',{
        dragging: false,
        tap: false,
        scrollWheelZoom:false,
        keyboard:false,
    }).setView(this.coords, this.scale);
}

Map.prototype.setTiles=function(){
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
}

Map.prototype.setMarker=function(){
    Leaflet.marker(this.coords).addTo(this.map)
    .bindPopup('Our office is here! ')
    .openPopup();
    //move a bit to the right the marker
    this.coords[1]=this.coords[1]+0.015;
    this.map.panTo(new L.LatLng(...this.coords));
}



