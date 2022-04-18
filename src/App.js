import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BeerList from './components/BeerList'
import Modal from './components/Modal'
import Filter from './components/Filter'
import Header from './components/Header'
import Footer from './components/Footer'
import { initializeBeers } from './reducers/beerReducer'
import { showNotification } from './reducers/notificationReducer'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBeers())
    dispatch(showNotification(''))
    document.body.style.overflow = 'hidden'
  }, [dispatch])

  return (
    <div>
      <Modal />
      <Header />
      <br></br>
      <main>
      <Filter />
      <BeerList />
      <Footer />
      </main>
    </div>
  )
}

export default App