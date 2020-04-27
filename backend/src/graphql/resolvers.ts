import createUser from '../res/Mutation/CreateUser';
import Login from '../res/Mutation/Login';
import Home from '../res/Query/Home';
import CreateTweet from '../res/Mutation/CreateTweet';
import Auth from '../res/auth/Authenticated';



const resolvers = {
    Mutation: {
        createUser,
        Login,
        CreateTweet: (_, args, context) => Auth.ignite(_, args, context, CreateTweet)
    },
    Query: {
        home: (_,args, context) => Auth.ignite(_,args, context, Home),
    }
}

export default resolvers;