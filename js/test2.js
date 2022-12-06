'use strict';

class R {

}

class Rectangle {
    constructor(props) {
        this.name = props.name;
        this.height = props.height;
        this.width = props.width;
    }

    static type = "Reactangle";

    sayName = () => {
        console.log(`Hi ${this.name}`);
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this._area = value;
    }

    // get style() {
    //     this.#style = #style;
    // }
}

class Square extends Rectangle {
    say = () => {
        console.log(this.name, this.height, this.width);
    }

}

const s = new Square({
    width: 200,
    height: 200,
    name: 'Sqyare'
});

s.sayName();
console.log(s.type);
console.log(s.area);

const myModule = require('./test3');

const myModuleInstance = new myModule();

myModuleInstance.goodbye();
myModuleInstance.hello();


// const str = 'My name is R2D2';

// console.log('convert me please'.replace(/ /g, '_'))