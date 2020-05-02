import Tweet from '../../db/models/Tweet';


async function Hello(_, args, ctx) {
    console.log("Tweet")
    const tweets = await Tweet.findAll({
        include: [
            {
                association: 'user',
            }
        ],
    })
    return tweets;
}

export default Hello;