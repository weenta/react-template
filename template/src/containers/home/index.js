import React, { Component } from 'react'
import './style'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h2>welcome to project: {{ name }}</h2>
            </div>
        )
    }
}
