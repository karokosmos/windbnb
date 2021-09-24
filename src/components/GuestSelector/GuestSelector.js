import React, { useState } from 'react'
import './GuestSelector.css'

const GuestSelector = ({ group, ageInfo, guests, handleGuestChange }) => {
  const [count, setCount] = useState(guests)

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    handleGuestChange(group, newCount)
  }

  const decrement = () => {
    const newCount = count === 0 ? 0 : count - 1
    setCount(newCount)
    handleGuestChange(group, newCount)
  }

  return (
    <div className="GuestSelector__selector">
      <p className="GuestSelector__group">{group}</p>
      <p className="GuestSelector__age">{ageInfo}</p>
      <div className="GuestSelector__count">
        <button className="GuestSelector__button" onClick={(() => decrement())}>
          <span className="GuestSelector__icon material-icons">
            remove
          </span>
        </button>
        <span>{count}</span>
        <button className="GuestSelector__button" onClick={(() => increment())}>
          <span className="GuestSelector__icon material-icons">
            add
          </span>
        </button>
      </div>
    </div>
  )
}

export default GuestSelector