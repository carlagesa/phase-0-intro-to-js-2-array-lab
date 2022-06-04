// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  return cats.concat(name);
}
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}
function removeLastCat() {
  return cats.slice[a.cats.length - 1];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1, cats.length);
}
