var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  arrayCopy = array.unshift(element)
  return arrayCopy
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}