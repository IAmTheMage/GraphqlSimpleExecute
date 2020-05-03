import {gql} from 'apollo-boost';

export const FETCHTWEETS = gql`
  {
    home {
      id
      tweet
      created_at
      user {
          id
          name
          email
      }
    }
  }
`;