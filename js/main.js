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
