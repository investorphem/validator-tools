# @investorphem/validator-tools

[![npm version](https://img.shields.io/npm/v/@investorphem/validator-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/validator-tools)
[![npm downloads](https://img.shields.io/npm/dm/@investorphem/validator-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/validator-tools)
[![License](https://img.shields.io/npm/l/@investorphem/validator-tools.svg?style=flat-square)](LICENSE)
[![Build Status](https://github.com/investorphem/validator-tools/actions/workflows/publish.yml/badge.svg)](https://github.com/investorphem/validator-tools/actions/workflows/publish.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contributors](https://img.shields.io/github/contributors/investorphem/validator-tools.svg)](https://github.com/investorphem/validator-tools/graphs/contributors)

---

## 🚀 Description

`@investorphem/validator-tools` is a lightweight JavaScript library for common validation tasks. It provides simple, fast, and secure functions to validate emails, phone numbers, URLs, and strong passwords.

## ✨ Features

* 📧 Validate **emails** with `isEmail`
* 📱 Validate international **phone numbers** with `isPhoneNumber`
* 🔗 Check **URLs** with `isUrl`
* 🔐 Enforce **strong passwords** with `isStrongPassword`
* 🛡️ **Type-Safe:** Automatically catches `null`, `undefined`, or non-string inputs without crashing.
* ⚡ **Modern ESM:** Native ES Module support (`import`/`export`)
* 🍃 **Zero dependencies** (ultra-lightweight)
* 🤖 Fully automated GitHub Actions publishing workflow

## 📦 Installation

```bash
npm install @investorphem/validator-tools
```

or via yarn:

```bash
yarn add @investorphem/validator-tools
```

## 🧠 Usage (ES Modules)

Since version 1.0.2, this package uses standard ES Modules.

```javascript
import { isEmail, isPhoneNumber, isUrl, isStrongPassword } from '@investorphem/validator-tools';

console.log(isEmail('test@example.com')); // true
console.log(isPhoneNumber('+12345678901')); // true
console.log(isUrl('[https://google.com](https://google.com)')); // true
console.log(isStrongPassword('Passw0rd!')); // true

// Safely handles invalid types without throwing regex errors
console.log(isEmail(null)); // false
```

## 📚 API

### `isEmail(str)`

Checks if a string is a valid email format.

**Parameters:**
* `str` *(string)* – Email string to validate

**Returns:**
* *(boolean)* – True if valid email

---

### `isPhoneNumber(str)`

Checks if a string is a valid international phone number (allows optional `+` and requires 7-15 digits).

**Parameters:**
* `str` *(string)* – Phone number string

**Returns:**
* *(boolean)* – True if valid phone number

---

### `isUrl(str)`

Checks if a string is a properly formatted URL.

**Parameters:**
* `str` *(string)* – URL string

**Returns:**
* *(boolean)* – True if valid URL

---

### `isStrongPassword(str)`

Checks if a string meets strong password criteria:
* Minimum 8 characters
* At least 1 lowercase letter
* At least 1 uppercase letter
* At least 1 number
* At least 1 special character

**Parameters:**
* `str` *(string)* – Password string

**Returns:**
* *(boolean)* – True if strong password

---

## ⚙️ Automated Releases

This project uses an automated release script. To publish a new version:

1. Commit your changes: `git commit -m "update validations"`
2. Run the release command: `npm run release`

This will automatically bump the patch version, create a git tag, and push to GitHub, triggering the automated NPM publish action.

---

## 🛠️ Contributing

Contributions are welcome! Please fork the repo, make improvements, and submit a pull request. Ensure code follows [StandardJS style](https://standardjs.com).

## 📄 License

This project is licensed under the MIT License.

## 🏷️ Badges Explained

* **npm version**: Current package version on npm
* **npm downloads**: Total downloads from npm
* **License**: License type
* **Build Status**: GitHub Actions workflow status
* **JavaScript Style Guide**: Code style standard
* **Contributors**: Number of contributors

---

*Maintained by Oluwafemi Olagoke*
