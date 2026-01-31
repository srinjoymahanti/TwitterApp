import {Filter} from 'bad-words';
import { createTweet as createTweetRepository,
    getTweets as getTweetsRepository,
    getTweetById as getTweetByIdRepository,
    deleteTweetById as deleteTweetByIdRepository,
    updateTweetById as updateTweetByIdRepository
} from '../repositories/tweetRepository.js';

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

export const getTweets = async () => {
    const tweets = await getTweetsRepository();
    return tweets;
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRepository(id);
    return tweet;
}

export const deleteTweetById = async (id) => {
    const tweet = await deleteTweetByIdRepository(id);
    if(!response){
        throw {
            message: 'Tweet not found',
            status: 404
        }
    }
    return tweet;
}

export const updateTweetById = async (id, body) => {
    const tweet = await updateTweetByIdRepository(id, body);
    if(!response){
        throw {
            message: 'Tweet not found',
            status: 404
        }
    }
    return tweet;
}