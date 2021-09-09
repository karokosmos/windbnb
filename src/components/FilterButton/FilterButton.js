import React from 'react'
import './FilterButton.css'

const FiltersButton = ({ filters, openFilterDrawer }) => {
  return (
    <button className="FiltersButton" onClick={openFilterDrawer}>
      <p className="FiltersButton__location">
        {filters.city}, {filters.country}
      </p>
      <div className="FiltersButton__line"></div>
      <p className="FiltersButton__guests">
        {filters.guests === null ? 'Add guests' : filters.guests}
      </p>
      <div className="FiltersButton__line"></div>
      <span className="FiltersButton__search material-icons">
        search
      </span>
    </button>
  )
}

export default FiltersButton