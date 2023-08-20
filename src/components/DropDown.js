import React from "react";

const DropDown = ({ filtered, active, onSelect }) => {
 
  if (!filtered)
    return null;

  if (filtered.length) {
    return (
      <ul className="drop-down">
        {filtered.map((state, index) => {
          return (
            <li
              className={index === active ? 'active' : undefined}
              key={state.id}
              onClick={() => onSelect(state)}
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
