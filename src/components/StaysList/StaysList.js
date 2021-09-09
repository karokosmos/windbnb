import React from 'react'
import Stay from '../Stay/Stay'
import './StaysList.css'
import { v4 as uuidv4 } from 'uuid'

const StaysList = ({ stays }) => {
  console.log(stays)
  return (
    <div className="StaysList">
      {stays.map(stay => (
        <Stay key={uuidv4()} stay={stay} />
      ))}
    </div>
  )
}

export default StaysList