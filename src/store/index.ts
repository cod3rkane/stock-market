import thunk from 'redux-thunk'
import { applyMiddleware, createStore, Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import reducers from './reducers'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = (initialStore = {}): Store => {
  return createStore(reducers, initialStore, bindMiddleware([thunk]))
}

export const wrapper = createWrapper(makeStore)
