import React, { useState } from 'react'
import './FilterDrawer.css'
import Filters from '../Filters/Filters'
import FilterOptions from '../FilterOptions/FilterOptions'

const FilterDrawer = ({ filters, setFilters, setShowFilters }) => {
  const [location, setLocation] = useState(`${filters.city}, ${filters.country}`)
  const [guests, setGuests] = useState(filters.guests)
  const [showLocations, setShowLocations] = useState(false)
  const [showGuests, setShowGuests] = useState(false)

  const handleLocationChange = (event) => {
    if (!event.target.closest('.LocationButton__location')) return
    const selectedLocation = event.target.closest('.LocationButton__location').textContent
    setLocation(selectedLocation)
  }

  const handleGuestChange = (group, count) => {
    if (group === 'Adults') {
      setGuests({ ...guests, adults: count })
    }
    if (group === 'Children') {
      setGuests({ ...guests, children: count })
    }
  }

  const toggleLocationFilter = (e) => {
    const button = e.target.closest('button')

    button.classList.contains('open')
      ? button.classList.remove('open')
      : button.classList.add('open')

    if (showGuests) {
      const guestsButton = document.querySelector('.Filters__button--guests')
      guestsButton.classList.remove('open')
      setShowGuests(false)
    }

    setShowLocations(!showLocations)
  }

  const toggleGuestsFilter = (e) => {
    const button = e.target.closest('button')

    button.classList.contains('open')
      ? button.classList.remove('open')
      : button.classList.add('open')

    if (showLocations) {
      const locationsButton = document.querySelector('.Filters__button--location')
      locationsButton.classList.remove('open')
      setShowLocations(false)
    }

    setShowGuests(!showGuests)
  }

  const handleSearch = () => {
    const city = location.split(', ')[0]
    const country = location.split(', ')[1]
    setShowFilters(false)
    setFilters({ city, country, guests })
  }

  return (
    <div className="FilterDrawer">
      <div className="FilterDrawer__container">
        <Filters
          location={location}
          guests={guests}
          toggleGuestsFilter={toggleGuestsFilter}
          toggleLocationFilter={toggleLocationFilter}
          handleSearch={handleSearch} />
        {(showLocations || showGuests) &&
          <FilterOptions
            handleLocationChange={handleLocationChange}
            handleGuestChange={handleGuestChange}
            showGuests={showGuests}
            showLocations={showLocations}
            guests={guests}
          />}
      </div>
      <div className="FilterDrawer__overlay"></div>
    </div>
  )
}

export default FilterDrawer