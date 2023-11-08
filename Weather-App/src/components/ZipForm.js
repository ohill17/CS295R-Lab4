import React, { useState } from 'react';


const ZipForm = ({ onSubmit }) => {
  const [zipcode, setZipcode] = useState('');

    const handleChange = (event) => {
     setZipcode(event.target.value);
        
    };
    const handleSubmit = (event) => {
            event.preventDefault();

            onSubmit(zipcode);
        }
    return (
        <div className="zip-form">
          <form id="zipForm" onSubmit={handleSubmit}>
            <div className="flex-parent">
              <label htmlFor="zipcode">Zip</label>
              <input
                className="form-control"
                type="text"
                id="zipcode"
                name="zipcode"
                value={zipcode} 
                onChange={handleChange} 
                required
              />
              <button type="submit" className="btn btn-success">
                Get the forecast!
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default ZipForm;