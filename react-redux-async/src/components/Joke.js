import React from 'react';
import styled from 'styled-components'

const StyledJoke = styled.div`
        border-bottom: 2px solid #ff78ae;
        padding: 1em;
        color: #fff8cd;

        .punchline {
            font-size: 0.7em;
        }
`

export function Joke (props) {
    const {type, setup, punchline} = props
    return (
        <StyledJoke>
            <div>section: {type}</div>
            <div><h3>{setup}</h3></div>
            <div className='punchline'>{punchline}</div>
        </StyledJoke>
    )
}