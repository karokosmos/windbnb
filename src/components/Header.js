import './Header.css'

const Header = ({ filters }) => {
  return (
    <div className="Header">
      <Logo />
      <FiltersButton filters={filters} />
    </div>
  )
}

const Logo = () => <img className="Logo" src="images/logo.svg" alt="Windbnb logo" />

const FiltersButton = ({ filters }) => {
  return (
    <button className="FiltersButton">
      <p className="FiltersButton-location">{filters.city}, {filters.country}</p>
      <div className="FiltersButton-line"></div>
      <p className="FiltersButton-guests">
        {filters.guests === 0 ? 'Add guests' : filters.guests}
      </p>
      <div className="FiltersButton-line"></div>
      <span className="FiltersButton-search material-icons">
        search
      </span>
    </button>
  )
}

export default Header