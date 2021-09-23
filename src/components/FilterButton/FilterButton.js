import React from 'react'
import './FilterButton.css'

const FiltersButton = ({ filters, openFilterDrawer }) => {
  let totalGuests = filters.guests.adults === 0 && filters.guests.children === 0
    ? 0
    : filters.guests.adults + filters.guests.children

  console.log('guests', totalGuests)

  return (
    <button className="FiltersButton" onClick={openFilterDrawer}>
      <p className="FiltersButton__location">
        {filters.city}, {filters.country}
      </p>
      <div className="FiltersButton__line"></div>
      <p className="FiltersButton__guests">
        {totalGuests === 0 ? 'Add guests' : totalGuests}
      </p>
      <div className="FiltersButton__line"></div>
      <span className="FiltersButton__search material-icons">
        search
      </span>
    </button>
  )
}

export default FiltersButton