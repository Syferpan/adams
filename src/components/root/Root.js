import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import createBrowserHistory from '../../services/history/history'
import { Router, Route } from 'react-router-dom'
import App from '../app/App'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={createBrowserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root