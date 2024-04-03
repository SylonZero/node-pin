# node-pin: Secure OTP Generation for Email Verification and More

The `node-pin` module offers a robust and secure solution for generating One-Time Passwords (OTPs), tailored specifically for authentication processes such as email verification. Built with security and ease of integration in mind, this library leverages Node.js's cryptographic modules to produce unpredictable and secure PINs, suitable for a wide array of verification and authentication scenarios.

### Features:

- **Secure Random PIN Generation**: Utilizes Node.js's `crypto` module to ensure each PIN is cryptographically secure, making them ideal for sensitive authentication tasks.
- **Flexible Length Configuration**: Generate PINs of any length between 1 and 10 digits, allowing for customization based on the security requirements of your application.
- **Promise-based API**: Designed with modern asynchronous patterns in mind, `node-pin` supports both callback and Promise-based workflows, ensuring seamless integration into contemporary Node.js applications.
- **Simplified Integration**: With minimal setup required, integrating `node-pin` into your project is straightforward, enabling you to add OTP generation functionality quickly and efficiently.
- **Versatile Use Cases**: While optimized for email verification, the `node-pin` module can be easily adapted for SMS verification, two-factor authentication (2FA), and other scenarios where OTPs are essential.

### Getting Started:

To begin using `node-pin` in your project, simply install the package using npm:

```bash
npm install node-pin --save
```

Then, generate a PIN by specifying the desired length:

```javascript
const { generateRandPin } = require('node-pin');

generateRandPin(6).then(pin => {
  console.log(`Your OTP: ${pin}`);
}).catch(err => {
  console.error(err);
});
```

Callback example:

```javascript
const { generateRandPin } = require('node-pin');

// Callback function to handle the result
function pinCallback(err, pin) {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  console.log(`Your OTP: ${pin}`);
}

// Generate a 6-digit PIN using the callback
generateRandPin(6, pinCallback);
```
