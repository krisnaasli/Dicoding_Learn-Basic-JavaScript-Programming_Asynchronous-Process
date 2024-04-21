/**
 * @TODO
 * Change the asynchronous callback-based function getProvinces to Promise-based.
 *
 * Notes:
 * - You can use util.promisify to convert the callback-based function to Promise-based.
 * - If the function name changes, adjust the exported value without changing the property name at the end of this file.
 */
let util = require('util');
function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'West Java' },
      ]);
      return;
    }
    
    callback(new Error('Country not found'), null);
  }, 1000);
}
// Convert the asynchronous callback-based function getProvinces to Promise-based.
let getProvincesPromise = util.promisify(getProvinces);
// Testing the getProvincesPromise function
getProvincesPromise('id')
  .then(provinces => {
    console.log('Provinces:', provinces);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });