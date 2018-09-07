// Code your solution in this file

function findMatching(drivers, name) {
  const newCollection = [];
 
  for (const driver of drivers) {
    if (name(driver)) {
      newCollection.push(driver);
    }
  }
 
  return newCollection;
}