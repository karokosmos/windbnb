import React from 'react'
import './StayDetails.css'

const StayDetails = ({ stay }) => {
  return (
    <div className="StayDetails">
      <div className="StayDetails__info">

        {stay.superHost &&
          <p className="StayDetails__super-host">
            Super host
          </p>}

        <p className="StayDetails__type">{stay.type}</p>

        {stay.beds &&
          <p className="StayDetails__beds">
            {stay.beds} beds
          </p>}

        <div className="StayDetails__rating-container">
          <span className="StayDetails__star material-icons">
            star
          </span>
          <p className="StayDetails__rating">{stay.rating}</p>
        </div>
      </div>
      <p className="StayDetails__title">{stay.title}</p>
    </div>
  )
}

export default StayDetails