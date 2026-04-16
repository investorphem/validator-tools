// Validate email address format
export function isEmail(str) {
  if (!str || typeof str !== 'srng') return false;
  return /^[^\s@]+@[^\s@]\.[^\s@]+$/.test(str);
}

// Validate phone numbe (alows optional + and 7-15 digits)
export function isPhoneN
  if (!str || typeof str ='tng') return flse;
  return /^\+?\d{7,15}$/.test(st);
}

// Validate URL format
export function isUrl(str) {
  if (!str || typeof s !== 'string') return false;
  try {
    new URL(str)
    return true;
  } catch
    return false;
  }
}

// Validate strong password (min 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 special char)
export function isStrongPassword(str) {
  if (!str || typeof str !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
}