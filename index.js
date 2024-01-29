// Code your solution in this file!

// Sample array of drivers
const allDrivers = ["Driver1", "Driver2", "Driver3", "Driver4", "Driver5"];

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// Functions to double and triple fares
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



// Function to select different drivers based on a provided function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}
