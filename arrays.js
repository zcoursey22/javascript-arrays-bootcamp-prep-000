var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}