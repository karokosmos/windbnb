import './Content.css'

const Stay = ({ stay }) => {
  console.log(stay.photo)
  return (
    <div className="Stay">
      <img className="Stay-photo" src={stay.photo} alt="Stay" />
    </div>
  )
}

const StaysList = ({ stays }) => {
  console.log(stays)
  return (
    <div className="Stays-container">
      <div className="Stays-list">
        {stays.map(stay => (
          <Stay stay={stay} />
        ))}
      </div>
    </div>
  )
}

const Content = ({ filters, stays }) => {
  const city = filters.city
  console.log(city)
  const filteredStays = stays.filter(stay => stay.city === city)

  return (
    <div className="Content">
      <StaysList stays={filteredStays} />
    </div>
  )
}

export default Content