const Suger = require("../dist/suger.js");

console.log(Object.keys(Suger));

console.log(Suger.keys({ a: "1" }));


Suger([1, 2, 3]).each(val => console.log(val));