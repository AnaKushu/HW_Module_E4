class Applience {
  constructor(name){
    this.name = name,
    this.voltage = '220v',
    this.watts = undefined,
    this.turn = false
  };

  getWatts() {
    let power = this.turn ? this.watts : 0;
    console.log(`${this.name} consumed power ${power} watts`);
    return power;
  };

  printProp() {
    console.log(`${this.name.toUpperCase()}`);
    for (let key in this) {
        if (typeof this[key] != 'function') {
            console.log(`${key} : ${this[key]}`);
          };
      };
  };

  powerOn() {
    this.turn = true;
    console.log(`\n${this.name.toUpperCase()} powered on`);
  };

  powerOff() {
    this.turn = false;
    console.log(`\n${this.name.toUpperCase()} powered off`);
  };
};

class EntityList {
  constructor() {}
  list() {
    console.log(`\n Appliences: `);
    for (let obj in this) {
        console.log();
        this[obj].printProp();
      };
  };

  powerConsumed() {
    let power_consumed = 0;
    console.log(`\n Power consumed:\n`);
    for (let obj in this) {
        power_consumed += this[obj].getWatts();
      };
     console.log(`Total power consumed: ${power_consumed} watts`);
    };
  };
  
class Laptop extends Applience {
  constructor(name, watts, os, color) {
    super(name, watts, os);
    this.watts = watts,
    this.os = os,
    this.color = color,
    this.sleepingMode = true
  };

  sleepingModeOn() {
    this.sleepingMode = true;
    console.log(`\n ${this.name.toUpperCase()} laptop sleeps`);
  };

  powerOn() {
    super.powerOn();
    this.sleepingMode = false
  };

  powerOff() {
    super.powerOff();
    this.sleepingMode = true;
  };

  getWatts() {
    let power = this.turn ? this.watts : 0;
    power = this.sleepingMode ? Math.round(power * 0.1) : power;
    console.log(`${this.name} power consumed ${power} watts`);
    return power;
  };
};
  
class Lamp extends Applience {
  constructor(name, watts, light, color) {
    super(name, watts);
    this.watts = watts,
    this.light = light,
    this.color = color
  };
};


const appliences = new EntityList();
appliences.lenovo = new Laptop('Lenovo', 230, 'Linux', 'grey');
appliences.deskLamp = new Lamp('DeskLamp', 8, 'cold light', 'black');

appliences.lenovo.powerOn();
appliences.deskLamp.powerOn();

appliences.list();
appliences.powerConsumed();

appliences.lenovo.sleepingModeOn();
appliences.powerConsumed();

appliences.lenovo.powerOff();
appliences.deskLamp.powerOn();
appliences.powerConsumed()
