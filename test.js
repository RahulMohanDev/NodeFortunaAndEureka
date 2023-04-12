// what is a IIFE ? 

// (function abc() {
//     console.log("Hello World");
// })();


var a =23;
var b =44;

function abc() {
    console.log("Hello World");
}

function xyz() {
    console.log("Hello World");
}

console.log(__dirname);
console.log(__filename);

exports.abc = abc;
exports.xyz = xyz;



//this will not execute