import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'
import { Joke } from './Joke'

export function Jokes(props) {
    debugger
    useEffect(() => {
        props.getJokes();
    }, []);
    return (
        <div>
            <h1>DRY jokes</h1>
            <h2>...unlike your code</h2>
            {props.jokes.map === undefined ?
            <span><h1>{props.jokes}</h1></span>:
            props.jokes.map((joke) => <Joke key={joke.id}
                                                type={joke.type}
                                                setup={joke.setup}
                                                punchline={joke.punchline}
                                                 />)}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Jokes)