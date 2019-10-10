import * as types from './actionTypes'
import axios from 'axios'

const jokesApi = 'https://official-joke-api.appspot.com/jokes/programming/ten'

export const getJokes = () => dispatch => {
    axios.get(jokesApi)
        .then(res => {
            let jokes = res.data;
            dispatch({ type: types.ADD_TO_JOKES, payload: jokes })
        })
        .catch(err => {
            debugger
            dispatch({ type: types.ERROR_MESSAGE, payload: err.message })
        })
}