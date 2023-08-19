import './App.css';
import { configureFakeBackend } from './FakeBackend'
import Typeahead from './components/Typeahead';

function App() {

  // setup fake backend
  configureFakeBackend();

  return (
    <div className="App">
      <Typeahead multiselect={false} />
      <div style={{padding: '25px', border: '1px solid navy'}}>
        Something 
        bellow
      </div>
    </div>
  );
}

export default App;
