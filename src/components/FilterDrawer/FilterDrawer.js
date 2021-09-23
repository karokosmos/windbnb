import React, { useState } from 'react'
import './FilterDrawer.css'
import Filters from '../Filters/Filters'
import FilterOptions from '../FilterOptions/FilterOptions'

const FilterDrawer = ({ filters, setFilters, setShowFilters }) => {
  const [location, setLocation] = useState(`${filters.city}, ${filters.country}`)
  const [guests, setGuests] = useState(filters.guests)
  const [showLocations, setShowLocations] = useState(false)
  const [showGuests, setShowGuests] = useState(false)

  const locations = ['Helsinki, Finland', 'Turku, Finland', 'Oulu, Finland', 'Vaasa, Finland']

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.closest('.LocationButton__location').textContent
    const city = selectedLocation.split(', ')[0]
    const country = selectedLocation.split(', ')[1]

    setLocation(selectedLocation)
    setFilters({ ...filters, city, country })
    setShowFilters(false)
  }

  const handleGuestChange = (group, count) => {
    if (group === 'Adults') {
      setGuests({ ...guests, adults: count })
    }
    if (group === 'Children') {
      setGuests({ ...guests, children: count })
    }

    setFilters({ ...filters, guests: guests })
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

  return (
    <div className="FilterDrawer">
      <div className="FilterDrawer__container">
        <Filters
          location={location}
          guests={guests}
          toggleGuestsFilter={toggleGuestsFilter}
          toggleLocationFilter={toggleLocationFilter} />
        {(showLocations || showGuests) &&
          <FilterOptions
            locations={locations}
            handleLocationChange={handleLocationChange}
            handleGuestChange={handleGuestChange}
            showGuests={showGuests}
            showLocations={showLocations}
          />}
      </div>
      <div className="FilterDrawer__overlay"></div>
    </div>
  )
}

export default FilterDrawer