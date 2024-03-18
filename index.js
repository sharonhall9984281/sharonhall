const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Function to generate a random string of specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to hash a password using bcrypt
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Function to compare a password with its hash
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

module.exports = {
  generateRandomString,
  hashPassword,
  comparePassword
};
