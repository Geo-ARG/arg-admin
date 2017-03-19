import { combineReducers } from 'redux'
import { listDataEvents } from './reducerARG'

const rootReducers = combineReducers({
  eventsdata = listDataEvents
})
