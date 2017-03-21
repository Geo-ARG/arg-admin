import { combineReducers } from 'redux'
import { listDataEvents, listDataUserEvents } from './reducerARG'

const rootReducers = combineReducers({
  listDataEvents: listDataEvents,
  listDataUserEvents: listDataUserEvents
})

export default rootReducers
