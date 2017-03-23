import { combineReducers } from 'redux'
import { listDataEvents, listDataUserEvents, listResultLoginAdmin, listsessionLoginStatus } from './reducerARG'


const rootReducers = combineReducers({
  listDataEvents: listDataEvents,
  listDataUserEvents: listDataUserEvents,
  listResultLoginAdmin: listResultLoginAdmin,
  listsessionLoginStatus: listsessionLoginStatus
})

export default rootReducers
