// Code your solution here

// drivers.filter(drivers, 'Bobby');

// function findMatching (array) {
//     for (const driver of array){
//         console.log(driver)
//     }
// }

// findMatching(drivers)

// console.log(filter(findMatching, 'Bobby'))


// function findMatching (array, name) {
//     return
    
// }

// findMatching(drivers)

function findMatching(array, specificName){;
    return array.filter(filteredName => (filteredName.toUpperCase() == specificName.toUpperCase()));
}

function fuzzyMatch (driversNamesArray, newString){
    return driversNamesArray.filter((newArray) => newArray.indexOf(newString) === 0
    )
}

function matchName(driverObject, arbitraryString){
    return driverObject.filter((element) => element.name === arbitraryString)
}
