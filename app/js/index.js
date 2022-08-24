'use strict'

import './components/lazy-load'
import './components/burger-menu'
import './components/nav-callback-btn'
import './components/slider'


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;
