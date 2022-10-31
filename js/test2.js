'use strict';

// filter

// const names = ['Ivam', "add", 'dddsadasdasdasd', "knekaaa"];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortNames);

// Map

// const answers = ['IvAn', "dDDa", 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// every/some

// const some = [4, 'adad', 'ffdfds'];

// console.log(some.some(item => typeof (item) === 'number'));

//reduce

// const arr = [4, 5, 1, 3, 2, 6];


// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//     .filter(name => name[1] === 'persone')
//     .map(item => item[0]);



// console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];


function addd(arr) {
    const newArr = arr.map((item, i) => {
        item.ppo = i;
        return arr;
    });

    console.log(newArr);
}

//addd(films);

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
};

//console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => `${typeof (acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

//console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    const i = 0;
    return arr.map((e, i) => {
        e.id = i;
        return e;
    });
}

//console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false);
    //
}

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter(amount => {
        return amount.amount > 0;
    });
    return newArr.reduce((sum, curr) =>  sum + curr.amount, 0);

};
//console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if (data.some((item) => item.amount < 0 ? true : false)){
        return data.reduce((sum, curr) => sum + curr.amount, 0);
    } else {
        getPositiveIncomeAmount(data);
    }
}

console.log(getTotalIncomeAmount(funds));



// const newArr = data.filter(amount => {
//     return amount.amount > 0;
// });
// return newArr.reduce((sum, curr) => typeof (sum) === 'object' ? sum.amount + curr.amount : sum + curr.amount);
// };
