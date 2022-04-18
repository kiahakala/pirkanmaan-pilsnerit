import React from 'react'
import { connect } from 'react-redux'
import { filterContent } from '../reducers/filterReducer'
import classes from './Filter.module.css'


const Filter = (props) => {

  const handleChange = (event) => {
      const filter = event.target.value
      props.filterContent(filter)
      }

  return (
    <div className={classes.filter}>
      Hae oluen nimellä&nbsp;
      <input name='filter' type='text' onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
    filterContent
  }

const ConnectedFilter = connect(() => ({}), mapDispatchToProps)(Filter)
export default ConnectedFilter