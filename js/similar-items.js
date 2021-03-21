import {createObjects} from './data.js';

const accType = function(type){
  switch(type){
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      '';
  }
}

const advertTemplate = document.querySelector('#card').content.querySelector('.popup');
const advertList = document.querySelector('#map-canvas');

const adverts = createObjects;
const advertListFragment = document.createDocumentFragment();

const createAdvert = function(advertData) {
  const advert = advertTemplate.cloneNode(true);
  advert.querySelector('.popup__avatar').src = advertData.author.avatar;
  advert.querySelector('.popup__title').textContent = advertData.offer.title;
  advert.querySelector('.popup__text--address').textContent = advertData.offer.address;
  advert.querySelector('.popup__text--price').textContent = `${advertData.offer.price} ₽/ночь`;
  advert.querySelector('.popup__type').textContent = accType(advertData.offer.type);
  advert.querySelector('.popup__text--capacity').textContent = `${advertData.offer.room} комнаты для ${advertData.offer.guests} гостей`;
  advert.querySelector('.popup__text--time').textContent = `Заезд до ${advertData.offer.checkin}, выезд до ${advertData.offer.checkout}`;

  const adFeatures = advert.querySelector('.popup__features');
  adFeatures.innerHTML = '';
  for (let i = 0; i < advertData.offer.features.length; i++){
    const featureName = advertData.offer.features[i];
    const featureClass = `popup__feature--${featureName}`;
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature',featureClass);
    adFeatures.appendChild(featureItem);
  }

  advert.querySelector('.popup__description').textContent = advertData.offer.description;

  const adPhotos = advert.querySelector('.popup__photos');
  adPhotos.innerHTML = '';
  for (let i = 0; i < advertData.offer.photos.length; i++){
    const adPhoto = advertData.offer.photos[i];
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.src = adPhoto;
    photoItem.alt = 'Фотография жилья';
    photoItem.width = '45';
    photoItem.height = '40';
    adPhotos.appendChild(photoItem);
  }
  advertListFragment.appendChild(advert);
};

for (let i = 0; i < adverts.length; i++) {
  const advertCard = createAdvert(adverts[i]);
  advertList.appendChild(advertCard);
}
