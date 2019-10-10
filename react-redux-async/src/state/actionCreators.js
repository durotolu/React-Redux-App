import * as types from './actionTypes'

const jokesApi = 'https://official-joke-api.appspot.com/jokes/programming/ten'

export const getJokes = () => dispatch => {
    axios.get()
        .then(res => {
            debugger
            let jokes = res.data;

            dispatch({ type: types.ADD_TO_JOKES, payload: jokes })
        })
        .catch(err => {
            debugger
        })
}