import beerService from '../services/beers'

const beersAtStart = []

const reducer = (state = beersAtStart, action) => {
  switch(action.type) {
    case 'VOTE':
      const updatedBeers = state.map(beer => beer.id !== action.data.id ? beer : action.data)
      updatedBeers.sort((a, b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
      return updatedBeers
    case 'INIT_BEERS':
      return action.data
    default: 
      return state
  }
}

export const initializeBeers = () => {
  return async dispatch => {
    const beers = await beerService.getAll()
    dispatch({
      type: 'INIT_BEERS',
      data: beers,
    })
    
  }
}

export const clickForVote = data => {
  return async dispatch => {
    const votedBeer = {
      ...data, votes: data.votes += 1
    }
    await beerService.update(votedBeer)
    dispatch({
      type: 'VOTE',
      data: votedBeer
    })
  }
}

export default reducer