import React, { useState, useEffect } from 'react'
import './FilterDrawer.css'

const FilterDrawer = ({ filters, setFilters, setShowFilters }) => {
  const [location, setLocation] = useState(`${filters.city}, ${filters.country}`)
  const [guests, setGuests] = useState(filters.guests)
  const [showLocations, setShowLocations] = useState(false)
  const [showGuests, setShowGuests] = useState(false)

  const locations = ['Helsinki, Finland', 'Turku, Finland', 'Oulu, Finland', 'Vaasa, Finland']

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.textContent
    const city = selectedLocation.split(', ')[0]
    const country = selectedLocation.split(', ')[1]

    setLocation(selectedLocation)
    setFilters({ ...filters, city, country })
    setShowFilters(false)
  }

  const toggleLocationFilter = (e) => {
    const button = e.target.closest('button')

    button.classList.contains('open')
      ? button.classList.remove('open')
      : button.classList.add('open')

    if (showGuests) {
      setShowGuests(false)
      const guestsButton = document.querySelector('.FilterDrawer__filter--guests')
      guestsButton.classList.remove('open')
    }

    setShowLocations(!showLocations)
  }

  const toggleGuestsFilter = (e) => {
    const button = e.target.closest('button')

    button.classList.contains('open')
      ? button.classList.remove('open')
      : button.classList.add('open')

    guests === null
      ? button.classList.add('zero')
      : button.classList.remove('zero')

    if (showLocations) {
      setShowLocations(false)
      const locationsButton = document.querySelector('.FilterDrawer__filter--location')
      locationsButton.classList.remove('open')
    }

    setShowGuests(!showGuests)
  }

  return (
    <div className="FilterDrawer">
      <div className="FilterDrawer__container">
        <div className="FilterDrawer__filters">
          <div className="FilterDrawer__filter-wrap">
            <button className="FilterDrawer__filter FilterDrawer__filter--location" onClick={(e) => toggleLocationFilter(e)}>
              <span>Location</span>
              {location}
            </button>
          </div>
          <div className="FilterDrawer__filter-wrap">
            <button className="FilterDrawer__filter FilterDrawer__filter--guests" onClick={(e) => toggleGuestsFilter(e)}>
              <span>Guests</span>
              {guests === null ? 'Add guests' : guests}
            </button>
          </div>
        </div>

        {(showLocations || showGuests) &&
          <div className="FilterDrawer__options">
            <div className="FilterDrawer__options-container">
              {showLocations &&
                <div className="FilterDrawer__locations">
                  {locations.map(location =>
                    <LocationButton location={location} handleClick={handleLocationChange} />
                  )}
                </div>}
            </div>
            <div className="FilterDrawer__options-container">
              {showGuests &&
                <div>
                  guests
                </div>}
            </div>
            <div className="FilterDrawer__options-container"></div>
          </div>}

      </div>
      <div className="FilterDrawer__overlay"></div>
    </div>
  )
}

const LocationButton = ({ location, handleClick }) => {
  return (
    <button className="LocationButton" onClick={handleClick}>
      {location}
    </button>
  )
}

export default FilterDrawer