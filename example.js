const nodePin = require('node-pin');

// Generate a 6-digit PIN
let pinCode6 = nodePin.generateRandPin(6);
console.log('6-Digit PIN generated:', pinCode6);

// Generate an 8-digit PIN
let pinCode8 = nodePin.generateRandPin(8);
console.log('8-Digit PIN generated:', pinCode8);

// Async invocation - generate a 10-digit PIN with a callback supplied
nodePin.generateRandPin(10, (err, asyncPinCode)=> {
    if(err) return console.log(err);
    console.log('10-digit PIN generated:', asyncPinCode);
});