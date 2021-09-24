import React from 'react'
import './Filters.css'

const Filters = ({ location, guests, toggleLocationFilter, toggleGuestsFilter, handleSearch }) => {
  const totalGuests = guests.adults === 0 && guests.children === 0
    ? 0
    : guests.adults + guests.children

  const guestButtonClass = totalGuests === 0
    ? "Filters__button Filters__button--guests zero"
    : "Filters__button Filters__button--guests"

  return (
    <div className="Filters">
      <div className="Filters__wrap">
        <button className="Filters__button Filters__button--location" onClick={(e) => toggleLocationFilter(e)}>
          <span>Location</span>
          {location}
        </button>
      </div>
      <div className="Filters__wrap">
        <button className={guestButtonClass} onClick={(e) => toggleGuestsFilter(e)}>
          <span>Guests</span>
          {totalGuests === 0 ? 'Add guests' : totalGuests}
        </button>
      </div>
      <div className="Filters__wrap">
        <button className="Filters__search" onClick={() => handleSearch()}>
          <span className="Filters__search-icon material-icons">
            search
          </span>
          Search
        </button>
      </div>
    </div>
  )
}

export default Filters