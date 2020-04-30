import { gql } from 'apollo-boost';

export const CREATEACCOUNTMUTATION = gql`
mutation create($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
        name
        email
        id
    }
}
`;