'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';


    say() {
        console.log(`Name : ${this.name} ${this.#surname}, Age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110)
            this._age = age;
        else {
            console.log('NaN');
        };
    }
}



const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;

console.log(ivan.surname);

console.log(ivan.age);

ivan.say();


// const chechbox = document.querySelector('#checkbox'),
//     form = document.querySelector('form'),
//     change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true;
// };

// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = '#fff';
//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = 'red';
//     }
// });

// const persone = {
//     name: 'Alex',
//     age: 25
// };

// const serializePersone = JSON.stringify(persone);
// localStorage.setItem('alex', serializePersone);

// console.log(JSON.parse(localStorage.setItem('alex')));

// localStorage.setItem('number', 5);

// console.log(localStorage.getItem('number'));


