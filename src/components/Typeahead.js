import React, { useState, useEffect } from "react";
import DropDown from './DropDown'

const Typeahead = (props) => {

  const [selections, setSelections] = useState([]);

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState(null);


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
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };

  const onSelect = state => {
    setShow(false);
    setSelections(arr => arr.push(state))
    setFilter('')
  };

  useEffect(() => {
    const getFilteredStates = async () => {
      fetch(`/names/?search=${filter}&limit=10`, {
        method: 'GET'
      })
        .then(response => {
          return response.text()
        })
        .then(text => {
          setFiltered(JSON.parse(text))
        })
        .catch(error => console.error(error));
    }
    if (filter) {
      getFilteredStates();
    }
  }, [filter]);

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
          filtered={filtered}
          active={active}
          onSelect={onSelect}
        />
      }
    </div>
  );
}

export default Typeahead;
