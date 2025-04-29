// basically, kad ir ka imesim i sita funkcija... jei tai bus empty, ismes true. jei ne, false.
const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

// exportuojam funkcija
module.exports = isEmpty;
