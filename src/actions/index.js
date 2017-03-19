export const showDataEvent = (resultAddEvent) =>{
  return{
    type: 'SHOW_DATA_EVENTS',
    payload: resultAddEvent
  }
}



export const getAllDataEvents = () => {
  return (dispatch) =>{
      fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events')
      .then(res => res.json())
      .then(resultAddEvent => {
        dispatch(showDataEvent(resultAddEvent))
      })
  }
}

export const addEvent = (newDataEvent) => {
  return (dispatch) =>{
      fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: newDataEvent.title, description: newDataEvent.description, date: newDataEvent.startDate._d, place: newDataEvent.place, eventScore: newDataEvent.eventScore, latitude: newDataEvent.lat, longitude: newDataEvent.lng, completion: newDataEvent.completion})
      })
      .then(res => res.json())
      .then(resultAddEvent => {
        dispatch(getAllDataEvents())
      })
  }
}


export const deleteEvent = (id) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events/'+id,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(deleteEvent => {
      dispatch(getAllDataEvents())
    })
  }
}
