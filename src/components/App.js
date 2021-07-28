import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'
import data from '../stays.json'

const App = () => {
  const [filters, setFilters] = useState({
    city: 'Helsinki',
    country: 'Finland',
    guests: 0
  })

  return (
    <div className="App">
      <Header filters={filters} />
      <Content filters={filters} stays={data} />
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
  - FiltersButton
  - FiltersDrawer
- Content
  - ContentHeader
    - ContentTitle
    - ApartmentsCount
  - ApartmentsList
    - Apartment
      - ApartmentDetails
      - ApartmentName
  - Footer
*/
