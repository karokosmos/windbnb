import React from 'react'
import './FilterButton.css'

const FiltersButton = ({ filters, openFilterDrawer }) => {
  const totalGuests = filters.guests.adults === 0 && filters.guests.children === 0
    ? 0
    : filters.guests.adults + filters.guests.children

  const guestsText = totalGuests > 1 ? `${totalGuests} guests` : `${totalGuests} guest`
  const guestButtonClass = totalGuests === 0 ? "FiltersButton__guests zero" : "FiltersButton__guests"

  return (
    <button className="FiltersButton" onClick={openFilterDrawer}>
      <p className="FiltersButton__location">
        {filters.city}, {filters.country}
      </p>
      <div className="FiltersButton__line"></div>
      <p className={guestButtonClass}>
        {totalGuests === 0 ? 'Add guests' : guestsText}
      </p>
      <div className="FiltersButton__line"></div>
      <span className="FiltersButton__search material-icons">
        search
      </span>
    </button>
  )
}

export default FiltersButton