import { useState } from "react";
import "../css/filterMenu.css";

function FilterMenu({ onFilterChange }) {
    const values = [
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin American",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese"
    ];
    
    const [showValues, setShowValues] = useState(false);


    return (
        <div className="filterWrapper">
            <div className="toggle-button" onClick={() => setShowValues(!showValues)}>Cusines</div>
            <div className={`values ${showValues ? "show" : ""}`}>
            {values.map(value => (
            <div key={value}>
                <input 
                    type="checkbox" 
                    id={value} 
                    onChange={e => {
                        onFilterChange(value, e.target.checked);
                    }}
                    />
                <label htmlFor={value}>{value}</label>
            </div>
            ))}
            </div>
          </div>
        );
      }
  
  export default FilterMenu;