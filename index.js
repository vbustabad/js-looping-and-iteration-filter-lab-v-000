// Code your solution in this file

function findMatching(drivers, name) {
  const new_drivers_array = drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
  return new_drivers_array;
}

function fuzzyMatch(drivers, name) {
  const new_drivers_array = drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
  return new_drivers_array;
}
