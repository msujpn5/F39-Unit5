import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

function Overview() {
    let currentDisplay = useSelector(selectDisplay)
  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>
        <table className='overview-table'>
        <tr>
            <td>Capital: </td>
            {currentDisplay.capital.map((e) => {
                <td>{e}</td>
            })}
        </tr>
        <tr>
            <td>Currencies: </td>
            <td>{currentDisplay.currencies.name}</td>
        </tr>
        <tr>
            <td>Continents: </td>
            {currentDisplay.continents.map((e) => {
                <td>{e}</td>
            })}
        </tr>
        <tr>
            <td>Population: </td>
            <td>{currentDisplay.population}</td>
        </tr>
        <tr>
            <td>Independent: </td>
            <td>{currentDisplay.independent ? "true" : "false"}</td>
        </tr>
        </table>
    </div>
)
}

export default Overview