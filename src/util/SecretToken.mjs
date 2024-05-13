import dotenv from 'dotenv'

dotenv.config()

export const secretKey = process.env.SECRET_TOKEN

//https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49
//https://github.com/auth0/node-jsonwebtoken
