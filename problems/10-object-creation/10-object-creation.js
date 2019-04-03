/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let serialKiller = {
    name: 'Jason Voorhees',
    age: 'Unknown', //He's died and come back so many times who really knows
    weapon: 'Butchers Knife',
    favKill: 'Anybody that is unlucky enough to cross his path'

}
console.log(serialKiller);
console.log(`serial killer name = ${serialKiller.name}`);
console.log(`serial killer name = ${serialKiller['name']}`);

serialKiller.weakness = 'Innocents'; // time and time again Jason has had opportunities to harm children yet he did not
delete serialKiller.favKill;
console.log(serialKiller);