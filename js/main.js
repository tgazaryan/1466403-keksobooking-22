let getRandomNumber = function(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  if (min < 0) {
    throw('Диапазон может быть только положительным');
  }
  return Math.floor(random);
}
getRandomNumber();

let getRandomFloat = function(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  if (min < 0) {
    throw('Диапазон может быть только положительным');
  }
  return random.toFixed(1);
}
getRandomFloat();
