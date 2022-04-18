import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import classes from '../components/Modal.module.css'
import { hideNotification } from '../reducers/notificationReducer'
import { showNotification } from '../reducers/notificationReducer'


export const useScrollLock = () => { 
  const lockScroll = React.useCallback(() => { 
  }, [])

  const unlockScroll = React.useCallback(() => { 
  }, []);

  return {
    lockScroll,
    unlockScroll
  };  
}

const Modal = (props) => {
  const dispatch = useDispatch()
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, [])
  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = '';
  }, [])

const verify = () => {
  dispatch(hideNotification())
  unlockScroll()
}

const deny = (content) => {
  dispatch(showNotification(content))
  lockScroll()
}

if (props.notification !== null ) {
  return (
    <div className={classes['modal-overlay']}>
    <div className={classes.modal}>
      {props.notification}
      <div>Olen yli 18-vuotias</div>
      <div className={classes.buttons}>
        <button onClick={() => verify()}>Kyllä</button>
        <button onClick={() => deny()}>Ei</button>
      </div>
    </div>
    </div>
  )
} else {
  return null
}
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Modal)
export default ConnectedNotification