import React from "react";
import { Button } from '@material-ui/core';
import { CloseRounded } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Button: {
    padding: '0 1px',
    minWidth: 16,
    margin: '0 1px'
  },
}));

const SearchBox = ({ onChangeInput, handleKeyDown, filter, selections, removeSelection }) => {
  const classes = useStyles();

  return (
    <div className="search-box">
      {selections &&
        <ul className="selections">
          {selections.map(state =>
            <li key={state.id}>
              <span className="selection">{state.id}
                <Button
                  size="small"
                  className={classes.Button}
                  onClick={() => removeSelection(state.id)}
                >
                  <CloseRounded />
                </Button>
              </span>
            </li>)}
        </ul>
      }
      <input
        type="text"
        onChange={onChangeInput}
        value={filter}
        onKeyDown={handleKeyDown}
        placeholder="select"
      />
    </div>
  )
}

export default SearchBox;
