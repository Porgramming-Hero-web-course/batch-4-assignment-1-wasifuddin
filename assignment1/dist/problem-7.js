"use strict";
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
