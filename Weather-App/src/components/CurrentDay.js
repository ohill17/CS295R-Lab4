import '../App.css'

const CurrentDay = ({city, forecastDay}) => {
    return (
        <div className="current-day">
        <h1 className="day-header">in {city.name}</h1>
        <div className="weather">
        <p>
            
            {forecastDay.description}
        </p>
      </div>
      <div className="details flex-parent">
        <div className="temperature-breakdown">
          <p>Morning Temperature: {forecastDay.morningTemp}&deg;F</p>
          <p>Day Temperature: {forecastDay.dayTemp}&deg;F</p>
          <p>Evening Temperature: {forecastDay.eveningTemp}&deg;F</p>
          <p>Night Temperature: {forecastDay.nightTemp}&deg;F</p>
        </div>
        <div className="misc-details">
          <p>Atmospheric Pressure: {forecastDay.pressure} hPa</p>
          <p>Humidity: {forecastDay.humidity}%</p>
          <p>Wind Speed: {forecastDay.wind} mph</p>
        </div>
      </div>
    </div>
    )
}
export default CurrentDay