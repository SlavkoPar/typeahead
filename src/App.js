import './App.css';
import { configureFakeBackend } from './FakeBackend'
import Typeahead from './components/Typeahead';

function App() {

  // setup fake backend
  configureFakeBackend();

  return (
    <div className="App">
      <Typeahead />
      <div style={{padding: '25px', border: '1px solid navy'}}>
        Pasta
        Gambori
      </div>
    </div>
  );
}

export default App;
