function Applience(name) {
    this.name = name,
    this.voltage = '220v',
    this.watts = undefined,
    this.turn = false
};

Applience.prototype.getWatts = function() {
    let power = this.turn ? this.watts : 0;
    console.log(`${this.name} consumed power ${power} watts`);
    return power;
};

Applience.prototype.printProp = function() {
    console.log(`${this.name.toUpperCase()}`);
    for (let key in this) {
        if (typeof this[key] != 'function') {
            console.log(`${key} : ${this[key]}`);
        };
    };
};

Applience.prototype.powerOn = function() {
    this.turn = true;
    console.log(`\n ${this.name.toUpperCase()} powered on`);
};

Applience.prototype.powerOff = function() {
    this.turn = false;
    console.log(`\n ${this.name.toUpperCase()} powered off`);
};

function list(entity) {
    console.log(`\n Appliences: `);
    for (let obj in entity) {
        console.log();
        entity[obj].printProp();
    };
};

function powerConsumed(entity) {
    let power_consumed = 0;
    console.log(`\n Power Consumed:\n`);
    for (let obj in entity) {
        power_consumed += entity[obj].getWatts();
    };
    console.log(`Total power consumed: ${power_consumed} watts`);
};

function Laptop(name, watts, os, color) {
    this.name = name,
    this.watts = watts,
    this.os = os,
    this.color = color,
    this.sleepingMode = true
};

function Lamp(name, watts, light, color) {
    this.name = name,
    this.watts = watts,
    this.light = light,
    this.color = color
};

Laptop.prototype = new Applience();
Lamp.prototype = new Applience();

Laptop.prototype.sleepOn = function() {
    this.sleepingMode = true;
    console.log(`\n ${this.name.toUpperCase()} laptop sleeps`);
};

Laptop.prototype.powerOn = function() {
    this.sleepingMode = false;
    this.turn = true;
    console.log(`\n ${this.name.toUpperCase()} laptop powered on`);
};

Laptop.prototype.powerOff = function() {
    this.sleepingMode = true;
    this.turn = false;
    console.log(`\n ${this.name.toUpperCase()} laptop powered off`);
};

Laptop.prototype.getWatts = function() {
    let power = this.turn ? this.watts : 0;
    power = this.sleepingMode ? Math.round(power * 0.2, -1) : power;
    console.log(`${this.name} power consumed ${power} watts`);
    return power;
};


const appliences = {};
appliences.lenovo = new Laptop('Lenovo', 230, 'Linux', 'grey');
appliences.deskLamp = new Lamp('DeskLamp', 8, 'cold light', 'black');

appliences.lenovo.powerOn();
appliences.deskLamp.powerOn();

list(appliences);
powerConsumed(appliences);

appliences.lenovo.powerOff();
appliences.deskLamp.powerOn();
powerConsumed(appliences)
