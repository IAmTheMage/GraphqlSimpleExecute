import jwt from 'jsonwebtoken';
import User from '../../db/models/User';
const secretJwt = process.env.SECRET_JWT;


async function Login(_, {email, password}) {
    const user:any = await User.findOne({
        where: {
            email
        }
    })

    if(!user) {
        return {
            token: "",
            error: "User not found",
            user: {
                name: "",
                email: ""
            }
        }
    }
    const compare = await user.comparePassword(password);
    
    if(compare) {
        const token = jwt.sign({id: user.id}, secretJwt);
        return {
            token: token,
            error: "",
            user: {
                name: user.name,
                email: user.email
            }
        }
    }
    return {
        token: "",
        error: "Credentials not match",
        user: {
            name: "",
            email: ""
        }
    }
}

export default Login;