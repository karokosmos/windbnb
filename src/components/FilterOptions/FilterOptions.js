import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './FilterOptions.css'
import GuestSelector from '../GuestSelector/GuestSelector'

const LocationButton = ({ location, handleClick }) => {
  return (
    <button className="LocationButton" onClick={handleClick}>
      <span className="LocationButton__icon material-icons">
        location_on
      </span>
      <span className="LocationButton__location">
        {location}
      </span>
    </button>
  )
}

const FilterOptions = ({ showLocations, showGuests, handleLocationChange, handleGuestChange, guests }) => {
  const locations = ['Helsinki, Finland', 'Turku, Finland', 'Oulu, Finland', 'Vaasa, Finland']

  if (showLocations) {
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__container">
          {showLocations &&
            <div className="FilterOptions__locations">
              {locations.map(location =>
                <LocationButton key={uuidv4()} location={location} handleClick={handleLocationChange} />
              )}
            </div>}
        </div>
        <div className="FilterOptions__container"></div>
        <div className="FilterOptions__container"></div>
      </div>
    )
  }

  return (
    <div className="FilterOptions">
      <div className="FilterOptions__container"></div>
      <div className="FilterOptions__container">
        {showGuests &&
          <div>
            <GuestSelector
              group="Adults"
              ageInfo="Age 13 or above"
              handleGuestChange={handleGuestChange}
              guests={guests.adults}
            />
            <GuestSelector
              group="Children"
              ageInfo="Ages 2-12"
              handleGuestChange={handleGuestChange}
              guests={guests.children}
            />
          </div>}
      </div>
      <div className="FilterOptions__container"></div>
    </div>
  )
}

export default FilterOptions