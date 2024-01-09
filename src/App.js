import React, { useState } from "react";
import CountryData from './App.json';
import './App.css';

function CountryMap() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryISO, setCountryISO] = useState('');
  let [countryStates, setCountryStates] = useState([]);
  const [msgDisplay, setMsgDisplay] = useState('');
  const [queryState, setQueryState] = useState('');
  const [isActive, setIsActive] = useState('show');

  const SelectCountry = (event) => {
    //debugger;
    const CountryName = event.target.value;
    const CountryUsed = CountryData.data.find((country) => country.name === CountryName);
    countryStates = CountryUsed.states;
    if (countryStates.length === 0) {
      let msg = ` No State in the following Country `;
      setMsgDisplay(msg);
      (isActive === 'show') ? setIsActive('hide') : setIsActive('show');
    } else {
      setSelectedCountry(CountryUsed.name);
      setMsgDisplay(!msgDisplay);
      setIsActive('show');
    }
    setCountryISO(CountryUsed.iso3);
    setCountryStates(countryStates);
    console.log(countryStates);
    console.log(CountryName);
    //---

  }


  return (
    <>
      <form>
        <div id='UsedCountry'><label> Select The Country - </label>
          {/* Dropdown menu for selecting a state */}
          <select onChange={SelectCountry} id='country-name'>
            {CountryData.data.map((country) => {
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