import React, { use, useState } from "react";

import Country from "./country/country";
import "./Countrys.css";

const Countrys = ({ countryfetch }) => {
  const [vijiteCountry, setvijiteCountry] = useState([]);
  const [vijiteflag, setvijiteflag] = useState([]);

  const handlevijitedcountry = (country) => {
    console.log(country);
    const newvijitedcontry = [...vijiteCountry, country];
    setvijiteCountry(newvijitedcontry);
  };

  const handleflag = (flag) => {
    const newvijitecflag = [...vijiteflag, flag];
    setvijiteflag(newvijitecflag);
  };

  const countrydata = use(countryfetch);
  const countrys = countrydata.countries;

  return (
    <div>
      <h1>all country: {countrys.length}</h1>
      <h3>total country vijite {vijiteCountry.length}</h3>
      <h3>total flags vijited{vijiteflag.length}</h3>

      
      <ol>
        {vijiteCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.comoon}</li>
        ))}
      </ol>
      <div>

        {
          vijiteflag.map(flag=> <img src={flag}></img>)
        }

      </div>

      <div className="countrys">
        {countrys.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handlevijitedcountry={handlevijitedcountry}
            handleflag={handleflag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
