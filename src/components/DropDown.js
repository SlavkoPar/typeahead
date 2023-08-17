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


const DropDown = ({ filter, active, onSelect }) => {
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    const getFilteredStates = async () => {
      fetch(`/names/?search=${filter}&limit=10`, {
        method: 'GET',
        headers: {}
      })
        .then(response => {
          return response.text().json()
        })
        .then(res => {
          setFiltered(res.text)
        })
        .catch(error => console.error(error));
    }
    getFilteredStates();
  }, [filter]);

  if (active < 0)
    active = 0;
  else if (active > filtered.length)
    active = filtered.length - 1;

  const onClick = state => {
    // setActive(0);
    //setShow(false);
    // setFiltered([]);
    onSelect(state);
  };

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
              state={state}
              onClick={(state) => onClick(state)}
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
