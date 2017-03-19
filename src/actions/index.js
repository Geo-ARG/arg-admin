export const showDataEvent = (resultAddEvent) =>{
  return{
    type: 'SHOW_DATA_EVENTS',
    payload: resultAddEvent
  }
}

export const addEvent = (title, description, date, place, eventScore, lat, lng, completion) => {
  return (dispatch) =>{
      fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, description: description, date: date, place: place, eventScore:place, lat: lat, lng: lng, completion: completion})
      })
      .then(res => res.json())
      .then(resultAddEvent => {
        dispatch(showDataEvent(resultAddEvent))
      })
  }
}
