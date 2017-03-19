export const listDataEvents = (state = [], action)=>{
  switch (action.type) {
    case 'SHOW_DATA_EVENTS':
      return action.payload;
    default:
      return state;
  }
}
