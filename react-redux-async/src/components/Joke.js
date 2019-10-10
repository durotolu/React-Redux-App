import React from 'react';

export function Joke (props) {
    const {type, setup, punchline} = props
    return (
        <div>
            <div>{type}</div>
            <div>{setup}</div>
            <div>{punchline}</div>
        </div>
    )
}