import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import * as actionCreators from '../state/actionCreators'
import { Joke } from './Joke'

const StyledJokes = styled.div`
    background-color: #f54291;

    .header {
        background-color: #ffa0d2;
        color: #45454d;
        padding: 0.5em;

        h1 {
            font-size: 2em;
        }
    }
    
    span {
        color: red;
    }
`

export function Jokes(props) {
    debugger
    useEffect(() => {
        props.getJokes();
    }, []);
    return (
        <StyledJokes>
            <div className='header'>
                <h1>DRY jokes</h1>
                <h2>...unlike your code</h2>
            </div>
            {props.jokes.map === undefined ?
            <span><h1>{props.jokes}</h1></span>:
            props.jokes.map((joke) => <Joke key={joke.id}
                                                type={joke.type}
                                                setup={joke.setup}
                                                punchline={joke.punchline}
                                                 />)}
        </StyledJokes>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Jokes)