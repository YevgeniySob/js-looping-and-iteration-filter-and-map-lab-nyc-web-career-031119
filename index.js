// Code your solution here:

function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (driver) {
    return driver.revenue >= revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue).map(function (driver) {
    return driver.name;
  })
}

function exactMatch(arr, parameters) {
  const key = Object.keys(parameters)[0];
  return arr.filter(function (driver) {
    return driver[key] === parameters[key];
  })
}

function exactMatchToList(arr, parameters) {
  return exactMatch(arr, parameters).map(function (driver) {
    return driver.name;
  })
}
