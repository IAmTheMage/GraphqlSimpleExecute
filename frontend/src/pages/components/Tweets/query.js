import {gql} from 'apollo-boost';

export const FETCHTWEETS = gql`
  {
    home {
      id
      user {
          id
      }
    }
  }
`;