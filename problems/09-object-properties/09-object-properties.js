/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

//for-in-loop to cycle through the properties

function objectProperties(someObj) {

    for (let key in someObj){
        console.log(`key = ${key}
        and value = ${someObj[key]}`);
    }

}
let someObj = {
    field1: 7,
    x: -220,
    name: 'Ace',
    age: 27,
    sport:  'Water Polo',
    speak: () => {console.log(`${this.name} says keep it pushing`)}
}
objectProperties(someObj);