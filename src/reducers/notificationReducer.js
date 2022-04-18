const reducer = (state = null, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }
  
  export const showNotification = (content) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: content
        })
    }
  }

  export const hideNotification = () => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: null
        })
    }
  }
  
  export default reducer