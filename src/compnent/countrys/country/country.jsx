import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handlevijitedcountry, handleflag }) => {
  const [vijited, setvijited] = useState(false);
  
  // console.log(country.);

  const languages = Object.values(country.languages.languages);
  
  const handleclick = () => {
    //  if(vijited){
    //   setvijited(false)
    //  }else{
    //   setvijited(true)
    //  }

    setvijited(!vijited);
    handlevijitedcountry(country)
    
  };

  return (
    // <div className={`country ${vijited ? 'country-vijited': 'not-vijited' }`}>

    <div className={`country ${vijited && "country-vijited"}`}>
      <div>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>name: {country.name.common}</h3>
        <p>population:{country.population.population}</p>
        <p>region: {country.region.region}</p>
        <p>languages :{languages.join(", ")}</p>
        <p>
          area :{country.area.area}{" "}
          {country.area.area > 300000 ? "big country" : "small country"}{" "}
        </p>
        <button className="btn" onClick={handleclick}>
          {vijited ? "visited" : "not visited"}
        </button>
        <button className="btn" onClick={()=>{handleflag(country.flags.flags.png)}}>Add visited flag</button>
      </div>
    </div>
  );
};

export default Country;
