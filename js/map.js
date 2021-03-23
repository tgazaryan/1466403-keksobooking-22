/* global L:readonly */

import { createObjects } from './data.js';
import {createAdvert} from './similar-items.js';

const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');

const adFormFields = document.querySelectorAll('fieldset');
for (let i = 0; i < adFormFields.length; i++) {
  const adFormField = adFormFields[i];
  adFormField.setAttribute('disabled', 'disabled');
}

const mapFiltersContainer = document.querySelector('.map__filters');
mapFiltersContainer.classList.add('map__filters--disabled');
const mapFilters = document.querySelectorAll('.map__filter');
for (let i = 0; i < mapFilters.length; i++) {
  const mapFilter = mapFilters[i];
  mapFilter.setAttribute('disabled', 'disabled');
}

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    for (let i = 0; i < adFormFields.length; i++) {
      const adFormField = adFormFields[i];
      adFormField.removeAttribute('disabled');
    }
    mapFiltersContainer.classList.remove('map__filters--disabled');
    for (let i = 0; i < mapFilters.length; i++) {
      const mapFilter = mapFilters[i];
      mapFilter.removeAttribute('disabled');
    }
  })
  .setView({
    lat: 35.65283,
    lng: 139.83947,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon (
  {
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainPinMarker = L.marker (
  {
    lat: 35.65283,
    lng: 139.83947,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

const createPins = (adverts) => {
  const pins = [];
  adverts.forEach((advertData) => {
    const lat = advertData.location.x;
    const lng = advertData.location.y;

    const pinIcon = L.icon (
      {
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

    const pinMarker = L.marker (
      {
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
    );

    pinMarker
      .addTo(map)
      .bindPopup(
        createAdvert(advertData),
        {
          keepInView: true,
        },
      );
    pins.push(pinMarker);
  })
  return pins
};
createPins(createObjects);



