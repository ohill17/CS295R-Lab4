import React from 'react';

function WeatherListItem({ onDayClick, index, forecastDay }) {
  const handleClick = () => {
    if (typeof onDayClick === 'function') {
      onDayClick(index);
    }
  };

  return (
    <div className="day" onClick={handleClick}>
      {forecastDay.date} {}
    </div>
  );
}

export default WeatherListItem;