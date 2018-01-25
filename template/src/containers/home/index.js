import React, { Component } from 'react'
import './style'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h2>Welcome</h2>
                <h3>To Project {{ name }}</h3>
            </div>
        )
    }
}
