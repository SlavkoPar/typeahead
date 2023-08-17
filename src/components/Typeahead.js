import React, { useState, useEffect } from "react";
import DropDown from './DropDown'

const Typeahead = (props) => {

  const [selections, setSelections] = useState([]);

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');

  const onChangeInput = e => {
    setShow(true);
    setFilter(e.currentTarget.value)
  };

  const handleKeyDown = e => {
    console.log(111)
    if (e.keyCode === 13) { // enter key
      setActive(0);
      onSelect(e.currentTarget.state)
    }
    else if (e.keyCode === 38) { // up arrow
      return setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return setActive(active + 1);
    }
  };

  const onSelect = state => {
    setShow(false);
    setSelections(arr => arr.push(state))
    setFilter('')
  };

  return (
    <div>
      <input className="dropdown"
        type="text"
        onChange={onChangeInput}
        value={filter}
        onKeyDown={handleKeyDown}
      />
      {show && filter &&
        <DropDown
          filter={filter}
          active={active}
          onSelect={onSelect}
        />
      }
    </div>
  );
}

export default Typeahead;
