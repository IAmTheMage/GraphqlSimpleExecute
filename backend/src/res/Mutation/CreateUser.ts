import User from '../../db/models/User';

async function createUser(_, args) {
    const user = await User.create(args);
    return user;
}

export default createUser