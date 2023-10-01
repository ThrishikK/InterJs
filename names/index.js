const namesList = require("../country/state/city");
const logic = require("../utilities/utils");
function getPeopleInCity(namesList) {
  return logic(namesList);
}
// console.log(getPeopleInCity(namesList));
module.exports = getPeopleInCity;
