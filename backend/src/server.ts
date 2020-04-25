import 'dotenv/config';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';
import {resolve} from 'path';


const server = new GraphQLServer({
    typeDefs: resolve(__dirname, 'graphql', 'schema.graphql'),
    resolvers
})

const port = process.env.PORT;

server.start(({port: port}) => 
console.log(`Server is running on localhost:${port}`
))