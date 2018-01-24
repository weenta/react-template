import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import './assets/css/reset.css'

import rootReducers from '@/reducers/rootReducers'
const store = createStore(
    rootReducers
)

import RouterMap from './router/routerMap'
render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
)