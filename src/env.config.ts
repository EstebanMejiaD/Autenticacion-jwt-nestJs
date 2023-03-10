export const EnvConfiguration = () => ({
    jwtSecret: process.env.SECRET_KEY,
    usernameSecret: process.env.USERNAME_SECRET,
    passwordSecret: process.env.PASSWORD_SECRET
})