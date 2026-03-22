# @investorphem/validator-tools

[![npm version](https://img.shields.io/npm/v/@investorphem/validator-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/validator-tools)
[![npm downloads](https://img.shields.io/npm/dm/@investorphem/validator-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/validator-tools)
[![License](https://img.shields.io/npm/l/@investorphem/validator-tools.svg?style=flat-square)](LICENSE)
[![Build Status](https://github.com/<your-username>/investorphem-validator-tools/actions/workflows/publish.yml/badge.svg)](https://github.com/<your-username>/investorphem-validator-tools/actions/workflows/publish.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contributors](https://img.shields.io/github/contributors/<your-username>/investorphem-validator-tools.svg)](https://github.com/<your-username>/investorphem-validator-tools/graphs/contributors)

---

## Description

`@investorphem/validator-tools` is a lightweight JavaScript library for common validation tasks. It provides simple functions to validate emails, phone numbers, URLs, and strong passwords.

## Features

* Validate emails with `isEmail` function
* Validate international phone numbers with `isPhoneNumber`
* Check URLs with `isUrl`
* Check strong passwords with `isStrongPassword`
* Lightweight and dependency-free
* Fully automated GitHub Actions publishing workflow

## Installation

```bash
npm install @investorphem/validator-tools
```

## Usage

```js
const { isEmail, isPhoneNumber, isUrl, isStrongPassword } = require('@investorphem/validator-tools');

console.log(isEmail('test@example.com')); // true
console.log(isPhoneNumber('+12345678901')); // true
console.log(isUrl('https://google.com')); // true
console.log(isStrongPassword('Passw0rd!')); // true
```

## API

### `isEmail(str)`

Checks if a string is a valid email.

**Parameters:**

* `str` *(string)* – Email string to validate

**Returns:**

* *(boolean)* – True if valid email

### `isPhoneNumber(str)`

Checks if a string is a valid international phone number.

**Parameters:**

* `str` *(string)* – Phone number string

**Returns:**

* *(boolean)* – True if valid phone number

### `isUrl(str)`

Checks if a string is a valid URL.

**Parameters:**

* `str` *(string)* – URL string

**Returns:**

* *(boolean)* – True if valid URL

### `isStrongPassword(str)`

Checks if a string is a strong password (min 8 chars, upper + lower + number + special char).

**Parameters:**

* `str` *(string)* – Password string

**Returns:**

* *(boolean)* – True if strong password

## Contributing

Contributions are welcome! Please fork the repo, make improvements, and submit a pull request. Ensure code follows [StandardJS style](https://standardjs.com).

## License

This project is licensed under the MIT License.

## Badges Explained

* **npm version**: Current package version on npm
* **npm downloads**: Total downloads from npm
* **License**: License type
* **Build Status**: GitHub Actions workflow status
* **JavaScript Style Guide**: Code style standard
* **Contributors**: Number of contributors

---

*Maintained by Oluwafemi Olagoke*
