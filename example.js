const nodePin = require('node-pin');

// Generate a 6-digit PIN
let pinCode = nodePin.generateRandPin(6);

console.log('PIN generated:', pinCode);

// Async generate a 10-digit PIN
nodePin.generateRandPin(10, (err, asyncPinCode)=> {
    if(err) return console.log(err);
    console.log('10-digit PIN generated:', asyncPinCode);
});