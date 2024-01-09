import React, { useState } from "react";
import CountryData from './App.json'; // Importing country data from App.json
import './App.css'; // Importing styles from App.css

function CountryMap() {
  // State variables for managing component state
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryISO, setCountryISO] = useState('');
  let [countryStates, setCountryStates] = useState([]);
  const [msgDisplay, setMsgDisplay] = useState('');
  const [queryState, setQueryState] = useState('');
  const [isActive, setIsActive] = useState('show');

  // Event handler for selecting a country from the dropdown menu
  const SelectCountry = (event) => {
    //debugger; // Uncomment to enable debugger
    const CountryName = event.target.value;
    const CountryUsed = CountryData.data.find((country) => country.name === CountryName);
    countryStates = CountryUsed.states;

    if (countryStates.length === 0) {
      // Display error message if there are no states for the selected country
      let msg = ` No State in the following Country `;
      setMsgDisplay(msg);
      (isActive === 'show') ? setIsActive('hide') : setIsActive('show'); // Toggle table visibility
    } else {
      // Set state variables for the selected country and update display
      setSelectedCountry(CountryUsed.name);
      setMsgDisplay(!msgDisplay);
      setIsActive('show');
    }

    // Set ISO code, states, and log information for debugging
    setCountryISO(CountryUsed.iso3);
    setCountryStates(countryStates);
    console.log(countryStates);
    console.log(CountryName);
    //---
  }

  // JSX structure for rendering the component
  return (
    <>
      <form>
        <div id='UsedCountry'>
          <label> Select The Country - </label>
          {/* Dropdown menu for selecting a state */}
          <select onChange={SelectCountry} id='country-name'>
            {CountryData.data.map((country) => {
              // Mapping through country data to create dropdown options
              return <option value={country.name} style={{
                border: '1px solid black',
                margin: "2px",
                padding: "2px",
              }}>{country.name}</option>
            })}
          </select>
          <p id="country-code">Country ISO Code - {countryISO}</p>
          <label> Search State - </label>
          <input type="search" id="user-search" onChange={(e) => setQueryState(e.target.value)} autoComplete="off" placeholder="Search State" />
        </div>
      </form>

      {/* Displaying error message and table of states */}
      <div>
        <p id="error-msg">{msgDisplay}</p>
        <table className={isActive}>
          <thead>
            <tr>
              <td> State Name </td>
              <td> State Code </td>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through filtered states to populate the table */}
            {countryStates.filter((item) => {
              return queryState.toLowerCase() === '' ? item : item.name.toLowerCase().includes(queryState);
            }).map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.state_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CountryMap;
