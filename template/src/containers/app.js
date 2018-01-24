import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1>hello app</h1>
                {this.props.children}
            </div>
        )
    }
}
