const crypto = require("crypto");

function hashPassword(password) {
    // Create a SHA-256 hash
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
}

const password1 = "1234";
const hashedPassword1 = hashPassword(password1);

const password2 = "1234";
const hashedPassword2 = hashPassword(password2);

console.log("Hashed Password1:", hashedPassword1);
console.log("Hashed Password2:", hashedPassword2);
