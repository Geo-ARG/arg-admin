import { combineReducers } from 'redux'
import { listDataEvents } from './reducerARG'

const rootReducers = combineReducers({
  listDataEvents: listDataEvents
})

export default rootReducers
