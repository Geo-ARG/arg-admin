import { combineReducers } from 'redux'
import { listDataEvents, listDataUserEvents, listResultLoginAdmin } from './reducerARG'

const rootReducers = combineReducers({
  listDataEvents: listDataEvents,
  listDataUserEvents: listDataUserEvents,
  listResultLoginAdmin: listResultLoginAdmin
})

export default rootReducers
