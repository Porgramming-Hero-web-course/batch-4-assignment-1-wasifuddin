"use strict";
{
    var validateKeys = function (obj, keys) {
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    };
    var person_1 = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person_1, ["name", "age"]));
}
