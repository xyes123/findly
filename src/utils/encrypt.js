// src/utils/encrypt.js
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key'; // Replace with your actual secret key, securely stored

// Encrypt function
export function encryptData(data) {
  try {
    const ciphertext = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
    return ciphertext;
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
}

// Decrypt function
export function decryptData(ciphertext) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
}
