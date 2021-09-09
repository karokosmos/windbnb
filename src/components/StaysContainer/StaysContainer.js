import React from 'react'
import StaysHeader from '../StaysHeader/StaysHeader'
import StaysList from '../StaysList/StaysList'
import './StaysContainer.css'

const StaysContainer = ({ country, stays }) => {
  return (
    <div className="StaysContainer">
      <StaysHeader
        country={country}
        staysCount={stays.length}
      />
      <StaysList stays={stays} />
    </div>
  )
}

export default StaysContainer