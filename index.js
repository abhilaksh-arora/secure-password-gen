function generatePassword(length = 8, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = true) {
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const numberCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()-_=+";

    let charset = '';

    if (includeUppercase) charset += uppercaseCharset;
    if (includeLowercase) charset += lowercaseCharset;
    if (includeNumbers) charset += numberCharset;
    if (includeSymbols) charset += symbolCharset;

    if (charset === '') {
        throw new Error('At least one character set must be included.');
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = generatePassword;
