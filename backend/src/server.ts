import 'dotenv/config';
import './db';
import { GraphQLServer } from 'graphql-yoga';
import {resolve} from 'path';
import resolvers from './graphql/resolvers';


const server = new GraphQLServer({
    typeDefs: resolve(__dirname, 'graphql', 'schema.graphql'),
    resolvers,
    context: req => {
        return {
            token: req.request.headers.authorization ? req.request.headers.authorization : null,
            res: req.response,
            user: req.request.headers.authorization ? {
                id: ""
            } : null
        }
    },
    middlewares: []
})

server.start(({port}) => 
console.log(`Server is running on localhost:${port}`
))