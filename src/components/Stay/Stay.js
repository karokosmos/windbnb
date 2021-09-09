import React from 'react'
import './Stay.css'
import StayDetails from '../StayDetails/StayDetails'

const Stay = ({ stay }) => {
  return (
    <div className="Stay">
      <img className="Stay__photo" src={stay.photo} alt="Stay" />
      <StayDetails stay={stay} />
    </div>
  )
}

export default Stay