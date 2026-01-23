import {Filter} from 'bad-words';
import { createTweet as createTweetRepository} from '../repositories/tweetRepository.js';
export const createTweet = async ({body}) => {
    //try to find blocked words in the tweet body if any blocked word found throw an error

    const filter = new Filter();

    if (filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: 'Tweet contains inappropriate language',
            status: 400
        }
    }

    const tweet = await createTweetRepository({ body });

    return tweet;
}