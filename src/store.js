import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import beerReducer from './reducers/beerReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
    beers: beerReducer,
    notification: notificationReducer,
    filter: filterReducer
  })

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk)
  )
)

export default store