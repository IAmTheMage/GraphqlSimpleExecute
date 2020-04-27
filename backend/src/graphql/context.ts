import jwt from 'jsonwebtoken';
const secretJWT = process.env.SECRET_JWT;

const resolve = req => {
    hello: () => console.log(req.request.headers)
}

export default resolve;