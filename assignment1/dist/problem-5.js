"use strict";
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
