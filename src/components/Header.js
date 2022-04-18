import classes from './Header.module.css'
import bottlesIcon from '../assets/bottles.svg'

const Header = () => {
    return (
      <>
        <div className={classes.header}>
          <div className={classes['main-image']}>
            <img src={bottlesIcon} alt='Icon with two beer bottles'/>
          </div>
          <h1>Pirkanmaan pilsnerit</h1>
          <div className={classes.introduction}>Sivulla esitellään pirkanmaalaisia panimoita ja niiden tuotteita. Hae suuhun sopivaa ja äänestä parhaita!</div>
          <div className={classes.disclaimer}>Sivu on harrasteprojekti ja sitä kehitetään pikkuhiljaa. <br></br> Tiedot haettu panimojen sivuilta.</div>
        </div>
      </>
    )
  }
  
  export default Header


