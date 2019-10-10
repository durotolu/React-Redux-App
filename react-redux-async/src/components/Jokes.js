import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'

export function Jokes(props) {
    debugger
    useEffect(() => {
        props.getJokes();
    }, []);
    return (
        <div>
            <div>{}</div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Jokes)