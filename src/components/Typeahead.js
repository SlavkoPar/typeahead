import React, { useState, useEffect } from "react";

import SearchBox from './SearchBox'
import DropDown from './DropDown'

const Typeahead = ({ multiselect }) => {

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
    if (e.keyCode === 13) { // enter key
      setActive(0);
      onSelect(filtered[active]);
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active === filtered.length - 1) ? null : setActive(active + 1);
    }
  };

  const onSelect = state => {
    if (multiselect) {
      setSelections([...selections, state]);
    }
    else {
      setShow(false);
      setFilter(state.name);
    }
  };

  const removeSelection = id => {
    setSelections([...selections.filter(s => s.id !== id)]);
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
      <SearchBox
        filter={filter}
        selections={selections}
        onChangeInput={onChangeInput}
        handleKeyDown={handleKeyDown}
        removeSelection={removeSelection}
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
