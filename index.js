function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isPhoneNumber(str) {
  return /^\+?\d{7,15}$/.test(str);
}

function isUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

function isStrongPassword(str) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
}

module.exports = {
  isEmail,
  isPhoneNumber,
  isUrl,
  isStrongPassword
};
