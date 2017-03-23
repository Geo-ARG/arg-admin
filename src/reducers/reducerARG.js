export const listDataEvents = (state = [], action)=>{
  switch (action.type) {
    case 'SHOW_DATA_EVENTS':
      return action.payload;
    default:
      return state;
  }
}

export const listDataUserEvents = (state= [], action) => {
  switch (action.type) {
    case 'SHOW_DATA_USER_EVENTS':
      return action.payload;
    default:
      return state;
  }
}

export const listResultLoginAdmin = (state= [], action) => {
  switch (action.type) {
    case 'GET_RESULT_LOGIN_ADMIN':
      return action.payload;
    default:
      return state;
  }
}
