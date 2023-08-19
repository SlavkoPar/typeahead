import React, { useState, useEffect } from "react";

const SearchBox = ({ onChangeInput, handleKeyDown, filter, selections, removeSelection }) => {

  return (
    <>
      <div className="search-box">
        {selections &&
          <ul className="selections">
            {selections.map(state =>
              <li key={state.id}>
                <span className="selection">{state.id} <button onClick={()=>removeSelection(state.id)}>X</button></span>
              </li>)}
          </ul>
        }
      </div>
      <input
        className="dropdown"
        type="text"
        onChange={onChangeInput}
        value={filter}
        onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default SearchBox;
