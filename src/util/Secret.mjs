import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secretToken = process.env.SECRET_KEY

export const secretKey = async (req,res) =>{

}