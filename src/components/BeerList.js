import { useSelector, useDispatch } from 'react-redux'
import { clickForVote } from '../reducers/beerReducer'
import classes from './BeerList.module.css'
import malt from '../assets/malt.svg'
import hop from '../assets/hop.svg'

const BeerList = () => {
    const dispatch = useDispatch()
    const beers = useSelector(({ filter, beers }) => {
        if (filter.length > 0) {
            return beers.filter(beer => beer.name.toLowerCase().includes(filter.toLowerCase()))
        } else {return beers}
    }
    )
    
    const vote = (beer, id) => {
        dispatch(clickForVote(beer, id))
      }

  return (
    <div className={classes.all}>
      {beers.map(beer =>
        <div key={beer.id}>
          <div className={classes.card}>
            <div>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p>{beer.description}</p>
            <p>{beer.recommendations}</p>
            <div className={classes['malts-and-hops']}>
              <div className={classes.malts}><span><img src={malt} className={classes.icon} alt='Malt icon'/></span><span>{beer.malts}</span></div>
              <div className={classes.hops}><span><img src={hop} className={classes.icon} alt='Hop icon'/></span><span>{beer.hops}</span></div>
            </div>
            <p>{beer.ingredients}</p>
            <p>{beer.other}</p>
           
            </div>
            <div className={classes['right-wrapper']}>
              <img className={classes['product-image']} alt="beer" src={beer.image} />
              <div className={classes.votes}>
                <div>Äänet: {beer.votes}</div>
                <button onClick={() => vote(beer)}>Äänestä</button>
              </div>
              </div>
          </div>
        </div>
      )}
       
    </div>
  )
}

export default BeerList