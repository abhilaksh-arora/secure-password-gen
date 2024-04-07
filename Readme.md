# SECURE Password Generator

A simple npm package for generating random passwords with customizable options.

## Installation

You can install the `secure-password-generator` package via npm:

```bash
npm install secure-password-generator

## Usage
const generatePassword = require('secure-password-generator');

// Generate a password with default settings (12 characters, including uppercase, lowercase, numbers, and symbols)
const password = generatePassword();
console.log("Default Password:", password);

// Generate a password with custom length and options
const customPassword = generatePassword(16, true, true, true, false);
console.log("Custom Password:", customPassword);

The generatePassword function accepts the following parameters:

length (optional): The length of the password (default is 12).
includeUppercase (optional): Whether to include uppercase letters (default is true).
includeLowercase (optional): Whether to include lowercase letters (default is true).
includeNumbers (optional): Whether to include numbers (default is true).
includeSymbols (optional): Whether to include symbols (default is true).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


In this documentation:

- The `Installation` section explains how to install the package using npm.
- The `Usage` section provides examples of how to use the `generatePassword` function with default and custom options.
- The `License` section states the license under which the package is distributed.

You can customize the documentation further to include more details about the package, such as additional options for password generation, security considerations, and any other relevant information. Make sure to keep the documentation clear and easy to understand for users who want to use your package.
```
