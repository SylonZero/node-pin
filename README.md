# node-pin

A simple crypto-safe PIN code generator for Node.js

Requires Node >=6.0.0.

## Installation

```bash
npm install node-pin
```

## Examples

```js
const nodePin = require('node-pin');

// Generate a 6-digit PIN
let pinCode = nodePin.generateRandPin(6);

console.log('PIN generated:', pinCode);

// Async generate a 10-digit PIN
nodePin.generateRandPin(10, (err, asyncPinCode)=> {
    if(err) return console.log(err);
    console.log('10-digit PIN generated:', asyncPinCode);
});
```

## Usage

### Functions

#### `generateRandPin(pinLength, [callback])`

Generates a random PIN code of the specified `pinLength`, and calls the callback if any. Returns the PIN code synchronously if no callback is provided. 

* `pinLength` - Number: A number specifying the length of the PIN to generate. Valid values are from 1 to 10.
* `callback` - (Optional) Function: Called with `(err, pin)` once the request has completed. `err` contains an error, if any, and `pin` contains the string PIN code generated.

