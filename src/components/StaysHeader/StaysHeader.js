import React from 'react'
import './StaysHeader.css'

const StaysHeader = ({ country, staysCount }) => (
  <div className="StaysHeader">
    <h1 className="StaysHeader__heading">
      Stays in {country}
    </h1>
    <p className="StaysHeader__count">
      {staysCount} stays
    </p>
  </div>
)

export default StaysHeader