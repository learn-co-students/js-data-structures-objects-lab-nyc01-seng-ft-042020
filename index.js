// Write your solution in this file!
const driver  = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    //driver[key] = value
    const newObj = Object.assign({}, driver, {[key]: value});
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key, value) {
    const newObj  = Object.assign({}, driver);
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
  }