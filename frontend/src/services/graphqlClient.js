import ApolloClient from 'apollo-boost';

const API = process.env.API;

const client = new ApolloClient({
    uri: API || "http://localhost:3000",
})

export default client;