import jwt from 'jsonwebtoken';
const secretJWT = process.env.SECRET_JWT;


class Auth {
    ignite(_, args, context, resolve) {
        const {token} = context;
        if(!token) {
            return context.res.status(419).json({error: "Unauthorized"});
        }
        const decodedToken = token.split(' ')[1];
        if(decodedToken) {
            const valid = jwt.verify(decodedToken, secretJWT);
            
            if(valid) {
                return resolve(_, args, context, valid);
            }
            return context.res.status(419).json({error: "Unauthorized"});
            
        }
        else {
            return context.res.status(419).json({error: "Token bad format"});
        }
        
    }
}

export default new Auth;