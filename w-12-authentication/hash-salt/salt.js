const bcrypt = require("bcryptjs");

const saltRounds = 10;
const password1 = "1234";
const password2 = "1234";

// Function to hash the password
async function hashPassword(password) {
    try {
        // Generate salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        return { salt, hashedPassword };
    } catch (error) {
        console.error("Error hashing password:", error);
    }
}

// Hash the password
hashPassword(password1).then(({ salt, hashedPassword }) => {
    console.log("Salt:", salt);
    console.log("Hashed Password:", hashedPassword);
});

hashPassword(password2).then(({ salt, hashedPassword }) => {
    console.log("Salt:", salt);
    console.log("Hashed Password:", hashedPassword);
});
