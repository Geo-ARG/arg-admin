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

export const getAllUserEvents = (token) => {
  return (dispatch) => {
    fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/quests/photo',{
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'token':token},
    })
    .then(res => res.json())
    .then(resutUserEvents =>{
      dispatch(showDataUserEvents(resutUserEvents))
    })
  }
}

export const updateUserCompletion = (id, status, token) => {
  return (dispatch) => {
    fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/'+id,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json', 'token': token},
      body: JSON.stringify({completion: status})
    }).then(()=>{
      dispatch(getAllUserEvents(token))
    })
  }
}


export const getAllDataEvents = (token) => {
  return (dispatch) =>{
      fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events',{
          method: 'GET',
          headers: {'Content-Type': 'application/json', 'token':token},
      }).then(res => res.json())
      .then(resultAddEvent => {
        dispatch(showDataEvent(resultAddEvent))
      })
  }
}

export const addQuest = (idEvent, newDataEvent, token) => {
    return (dispatch) =>{
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'token': token},
          body: JSON.stringify({title: newDataEvent.locationTask_title, task: newDataEvent.locationTask_task, EventId: idEvent, type: "Coordinate", answerKey: newDataEvent.locationTask_answerKey, photoUrl: "", verification: false})
        })
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'token': token},
          body: JSON.stringify({title: newDataEvent.challengeTask_title, task: newDataEvent.challengeTask_task, EventId: idEvent, type: "Text", answerKey: newDataEvent.challengeTask_answerKey, photoUrl: "", verification: false})
        })
        fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests',{
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'token': token},
          body: JSON.stringify({title: newDataEvent.cameraTask_title, task: newDataEvent.cameraTask_task, EventId: idEvent, type: "Photo", answerKey: newDataEvent.cameraTask_answerKey, photoUrl: "", verification: false})
        })
    }
}

export const addEvent = (newDataEvent, token) => {
  return (dispatch) =>{
      fetch('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events',{
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'token': token},
        body: JSON.stringify({title: newDataEvent.title, description: newDataEvent.description, date: newDataEvent.startDate._d, place: newDataEvent.place, eventScore: newDataEvent.eventScore, latitude: newDataEvent.lat, longitude: newDataEvent.lng, completion: newDataEvent.completion})
      })
      .then(res => res.json())
      .then(resultAddEvent => {
        dispatch(addQuest(resultAddEvent.id, newDataEvent, token))
        dispatch(getAllDataEvents(token))
      })
  }
}

export const deleteQuest = (id, token) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/quests/event/'+id,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', 'token': token}
    })
    .then(res => res.json())
    .then(deleteEvent => {
      dispatch(getAllDataEvents(token))
    })
  }
}

export const deleteUserEvents = (id, token) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/userevents/event/'+id,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', 'token': token}
    })
  }
}


export const deleteEvent = (id, token) => {
  return (dispatch) => {
    fetch ('http://geo-arg-server-dev.ap-southeast-1.elasticbeanstalk.com/api/events/'+id,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', 'token': token}
    })
    .then(res => res.json())
    .then(deleteEvent => {
      dispatch(deleteUserEvents(id, token))
      dispatch(deleteQuest(id, token))
      dispatch(getAllDataEvents(token))
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
