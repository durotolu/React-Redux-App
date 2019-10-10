import * as types from './actionTypes'

const initialJoke = [];
export function jokeReducer(jokes = initialJoke, action) {
    switch (action.type) {
        case types.ADD_TO_JOKES:
            return jokes.concat(action.payload);
        default:
            return jokes;
    }
}