const getRandomNumber = function(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  if (min < 0 || max < 0 || max <=min) {
    throw('Диапазон может быть только положительным');
  }
  return Math.floor(random);
}
getRandomNumber(0, 10);

const getRandomFloat = function(min, max, decimal = 2) {
  const random = min + Math.random() * (max + 1 - min);
  if (min < 0 || max < 0 || max <= min) {
    throw('Диапазон может быть только положительным');
  }
  return random.toFixed(decimal);
}
getRandomFloat(0, 10, 2);

const TITLE = 'Уютное жилье для вашего отпуска';
const DESCRIPTION = 'Оставайтесь у нас';

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const RANDOM_OBJ_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const createRandomArray = (array) => {
  return array.slice(0, getRandomNumber(0, array.length-1), array.length);
};

const createObj = () => {
  const location = {
    x: getRandomFloat(35.65000, 35.7000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1,8)}.png`,
    },
    offer: {
      title: TITLE,
      address: `${location.x}, ${location.y}`,
      price: getRandomNumber(1, 10000),
      type: getRandomArrayElement(TYPE),
      room: getRandomNumber(1,5),
      guests: getRandomNumber(1,5),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createRandomArray(FEATURES),
      description: DESCRIPTION,
      photos: createRandomArray(PHOTOS),
    },
    location: `${location.x}, ${location.y}`,
  }
};

new Array(RANDOM_OBJ_COUNT).fill(null).map(() => createObj());
