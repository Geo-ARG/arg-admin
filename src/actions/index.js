export const showDataEvent = (resultAddEvent) =>{
  return{
    type: 'SHOW_DATA_EVENTS',
    payload: resultAddEvent
  }
}

export const showDataUserEvents = (resutUserEvents) => {
  return {
    type: 'SHOW_DATA_USER_EVENTS',
    payload: resutUserEvents
  }
}

export const sessionLoginStatus = () =>{
  return {
    type: 'SESSION_LOGIN_STATUS',
    payload: true
  }
}

export const getAllUserEvents = () => {
  return (dispatch) => {
    fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/quests/photo')
    .then(res => res.json())
    .then(resutUserEvents =>{
      dispatch(showDataUserEvents(resutUserEvents))
    })
  }
}

export const updateUserCompletion = (id, status) => {
  return (dispatch) => {
    fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/'+id,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({completion: status})
    }).then(()=>{
      dispatch(getAllUserEvents())
    })
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

export const addQuest = (idEvent, newDataEvent) => {
    return (dispatch) =>{
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title: newDataEvent.locationTask_title, task: newDataEvent.locationTask_task, EventId: idEvent, type: "Coordinate", answerKey: newDataEvent.locationTask_answerKey, photoUrl: "", verification: false})
        })
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title: newDataEvent.challengeTask_title, task: newDataEvent.challengeTask_task, EventId: idEvent, type: "Text", answerKey: newDataEvent.challengeTask_answerKey, photoUrl: "", verification: false})
        })
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title: newDataEvent.cameraTask_title, task: newDataEvent.cameraTask_task, EventId: idEvent, type: "Photo", answerKey: newDataEvent.cameraTask_answerKey, photoUrl: "", verification: false})
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
        dispatch(addQuest(resultAddEvent.id, newDataEvent))
        dispatch(getAllDataEvents())
      })
  }
}

export const deleteQuest = (id) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests/event/'+id,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(deleteEvent => {
      dispatch(getAllDataEvents())
    })
  }
}

export const deleteUserEvents = (id) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/event/'+id,{
      method: 'DELETE'
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
      dispatch(deleteUserEvents(id))
      dispatch(deleteQuest(id))
      dispatch(getAllDataEvents())
    })
  }
}

export const getResultLoginAdmin = (resultLoginAdmin) => {
  return {
    type: 'GET_RESULT_LOGIN_ADMIN',
    payload: resultLoginAdmin
  }
}

export const loginAdmin = (email, password) =>{
  return (dispatch) =>{
    fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/auth/admins/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    })
    .then(res => res.json())
    .then(resultLoginAdmin => {
      dispatch(getResultLoginAdmin(resultLoginAdmin))
    })
  }
}
