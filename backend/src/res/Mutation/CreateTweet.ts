import Tweet from '../../db/models/Tweet';


async function CreateTweet(_, args, ctx, user) {
    const tweet = await Tweet.create({
        user_id: user.id,
        tweet: args.tweet,
    })
    return tweet;
}

export default CreateTweet;