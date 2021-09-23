import React, { useState } from 'react'
import Header from './components/Header/Header'
import StaysContainer from './components/StaysContainer/StaysContainer'
import Footer from './components/Footer/Footer'
import FilterDrawer from './components/FilterDrawer/FilterDrawer'
import './App.css'
import staysData from './stays.json'

const App = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    city: 'Helsinki',
    country: 'Finland',
    guests: {
      adults: 0,
      children: 0
    }
  })

  const filteredStays = staysData.filter(stay => stay.city === filters.city)

  return (
    <div className="App">
      {showFilters &&
        <FilterDrawer
          filters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />}
      <Header
        filters={filters}
        openFilterDrawer={() => setShowFilters(true)}
      />
      <StaysContainer
        country={filters.country}
        stays={filteredStays}
      />
      <Footer />
    </div>
  )
}

export default App

/*
COMPONENTS PLAN

App
- Header
  - Logo
  - FilterButton
  - FilterDrawer
    - Filters
    - FilterOptions
- StaysContainer
  - StaysHeader
  - StaysList
    - Stay
      - StayDetails
  - Footer
*/
