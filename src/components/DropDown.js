import React, { useState, useEffect } from "react";

// const getStates = (suggestions, filter) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       'status': 300,
//       'content-type': 'application/json',
//       'data': {
//         'results': suggestions
//           .filter(suggestion => suggestion.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
//       }
//     })
//   }, 50)
// })


const DropDown = ({ filtered, active, onSelect }) => {
 
  if (!filtered)
    return null;

  if (filtered.length) {
    return (
      <ul className="autocomplete">
        {filtered.map((state, index) => {
          return (
            <li
              className={index === active ? 'active' : undefined}
              key={state.id}
              onClick={(state) => onSelect(state)}
              // tabIndex={0}
            >
              {state.name}
            </li>
          );
        })}
      </ul>
    );
  }
  else {
    return (
      <div className="no-suggestions">
        <em>Not found</em>
      </div>
    );
  }
}

export default DropDown;
