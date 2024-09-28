export const validatePassword = async (password) => {
    console.log("validating pw:", password)
    const validPassword = process.env.REACT_APP_PASSWORD;
    console.log("Stored password:", validPassword);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const validPassword = process.env.REACT_APP_PASSWORD; // Use the environment variable
            if (password === validPassword) {
                resolve({ valid: true });
            } else {
                resolve({ valid: false });
            }
        }, 1000);
    });
};
