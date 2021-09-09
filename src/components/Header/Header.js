import React from 'react'
import FiltersButton from '../FilterButton/FilterButton'
import './Header.css'

const Header = ({ filters, openFilterDrawer }) => {
  return (
    <div className="Header">
      <img className="Logo" src="images/logo.svg" alt="Windbnb logo" />
      <FiltersButton
        filters={filters}
        openFilterDrawer={openFilterDrawer}
      />
    </div>
  )
}

export default Header