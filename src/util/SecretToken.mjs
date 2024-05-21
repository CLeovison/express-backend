import dotenv from 'dotenv'

dotenv.config()

export const secretKey = process.env.SECRET_KEY

//https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49
//https://github.com/auth0/node-jsonwebtoken

export const gEmail = process.env.EMAIL
export const myPassword = process.env.APP_PASSWORD