import './App.css';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

import { configureFakeBackend } from './FakeBackend'
import Typeahead from './components/Typeahead';

function App() {

  // setup fake backend
  configureFakeBackend();

  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Multiselect Typeahead
        </Typography>
        <Typeahead multiselect={true} />
        <div style={{ padding: '25px', border: '1px solid navy' }}>
          Something bellow
        </div>
      </Paper>
    </Container>
  );
}

export default App;
