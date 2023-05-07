/* eslint-disable */ 
import { GET_NEWS_FEED } from "../utils/constants";
import { NewsArticle } from "../utils/types";


// Define the initial state of the news feed as an empty array
const initialState = {
    newsFeed: [],
};

// Define the reducer function for the news feed, which takes in a state and an action as parameters
const feedReducer = (
    state = initialState, // Set the default state to be the initial state defined above
    action: {type: String; payload: NewsArticle[]}, // Define the action object with a type (a string) and a payload (an array of NewsArticle objects)
) => {
    switch (action.type) { // Use a switch statement to handle different types of actions
        case GET_NEWS_FEED: // If the action type is GET_NEWS_FEED, update the newsFeed array in the state with the payload data
            return {...state, newsFeed: action.payload};
        default: // For any other action types, return the current state as is
            return state;
    }
};

// Export the feedReducer function as the default export for this module
export default feedReducer;
