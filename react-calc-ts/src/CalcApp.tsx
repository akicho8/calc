import React from 'react'

export default class CalcApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <>
                <button>add</button>
            </>
        )
    }
}
