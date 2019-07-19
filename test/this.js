// creating object and adding properties to the object.

var bikes = {
    name : 'Honda',
    model : 'shine',
    price :  [70000,80000],
    display  : function(){

        console.log('${this.name} is the fortune company in the world.This new model is ${this.model} and its price is ${this.price[0]} and ${this.price[1]}');

    },
    welcome : function(){
        console.log('visit the ${this.name}');
    }

};


// two ways to accessingg the properties
console.log('using dot notation =>'+bikes.name);
console.log('usi ng braackets =>'+bikes['model']);
bikes.welcome();

