# Sharonhall

A Node.js module providing cryptographic utility functions.

## Installation

You can install this module via npm: `npm install sharonhall`

## Usage
```javascript
const { generateRandomString, hashPassword, comparePassword } = require('crypto-utils');

// Generate a random string
const randomString = generateRandomString(10);
console.log('Random String:', randomString);

// Hash a password
const password = 'myPassword';
hashPassword(password).then(hash => {
  console.log('Password Hash:', hash);

  // Compare a password with its hash
  comparePassword(password, hash).then(match => {
    console.log('Password Matches:', match); // true
  });
});
```
