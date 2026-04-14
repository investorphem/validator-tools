// Validate email address format
export function isEmail(str) {
  if (!str || typeof str !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// Validate phone number (allows optional + and 7-15 digits)
export function isPhoneNumber(str) {
  if (!str || typeof str !== 'string') return false;
  return /^\+?\d{7,15}$/.test(str);


// Validate URL forma
export function isUrl(str) 
  if (!str || typeof str !== 'string') return fals
  try 
    new URL(st
    return tr
  } cat
    return fls
  
}

// Validate strong password (min 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 special char)
export function isStrongPassword(str) {
  if (!str || typeof str !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
}