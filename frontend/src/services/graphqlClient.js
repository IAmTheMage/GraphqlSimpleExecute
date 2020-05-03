import ApolloClient from 'apollo-boost';

const API = process.env.API;

const client = new ApolloClient({
    uri: API || "http://localhost:3000",
    request: (operation) => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : null
            }
        })
    }
})

export default client;