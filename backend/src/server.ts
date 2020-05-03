import 'dotenv/config';
import './db';
import { GraphQLServer } from 'graphql-yoga';
import jwt from 'jsonwebtoken';
import {resolve} from 'path';
import resolvers from './graphql/resolvers';


const server = new GraphQLServer({
    typeDefs: resolve(__dirname, 'graphql', 'schema.graphql'),
		resolvers,
		middlewares: [],
    context: req => {
        return {
            token: req.request.headers.authorization ? req.request.headers.authorization : null,
            res: req.response,
            user: req.request.headers.authorization ? {
                id: ""
            } : null
        }
    },
    
})

server.post('/checkLogin', (req,res) => {
    try {
        const {authorization} = req.headers;
        const token = jwt.verify(authorization, process.env.SECRET_JWT);
        return res.json({token})
    }
    catch {
        return res.status(419).json({
            error: "Unauthorized"
        })
    }
})

server.start(({port}) => 
console.log(`Server is running on localhost:${port}`
))