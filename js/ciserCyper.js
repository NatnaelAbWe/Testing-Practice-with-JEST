function caesarCipher(str, shift) {
  if (typeof str !== 'string') {
    throw new Error('Please enter a string');
  }

  const encryptedMsg = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = str.charCodeAt(i);

    // Uppercase letters (A-Z)
    if (char >= 'A' && char <= 'Z') {
      const shifted = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
      encryptedMsg.push(String.fromCharCode(shifted));
    }
    // Lowercase letters (a-z)
    else if (char >= 'a' && char <= 'z') {
      const shifted = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
      encryptedMsg.push(String.fromCharCode(shifted));
    }
    // Non-letter characters (punctuation, spaces, numbers)
    else {
      encryptedMsg.push(char);
    }
  }

  return encryptedMsg.join('');
}

export { caesarCipher };
