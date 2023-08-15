import './App.css';
import Typeahead from './components/Typeahead';

function App() {
  return (
    <div className="App">
      <Typeahead
        suggestions={[
          { id: 1, name: "Alabama" }, 
          { id: 2, name: "Alaska" }, 
          { id: 3, name: "American Samoa" }, 
          { id: 4, name: "Arizona" }, 
          { id: 5, name: "Arkansas" }, 
          { id: 6, name: "California" }, 
          { id: 7, name: "Colorado" }, 
          { id: 8, name: "Connecticut" }, 
          { id: 9, name: "Delaware" }, 
          { id: 10, name: "District Of Columbia" }, 
          { id: 11, name: "Federated States Of Micronesia" }, 
          { id: 12, name: "Florida" }, 
          { id: 13, name: "Georgia" }, 
          { id: 14, name: "Guam" }, 
          { id: 15, name: "Hawaii" }, 
          { id: 16, name: "Idaho" }, 
          { id: 17, name: "Illinois" }, 
          { id: 18, name: "Indiana" }, 
          { id: 19, name: "Iowa" }, 
          { id: 20, name: "Kansas" }, 
          { id: 21, name: "Kentucky" }, 
          { id: 22, name: "Louisiana" }, 
          { id: 23, name: "Maine" }, 
          { id: 24, name: "Marshall Islands" }, 
          { id: 25, name: "Maryland" }, 
          { id: 26, name: "Massachusetts" }, 
          { id: 27, name: "Michigan" }, 
          { id: 28, name: "Minnesota" }, 
          { id: 29, name: "Mississippi" }, 
          { id: 30, name: "Missouri" }, 
          { id: 31, name: "Montana" }, 
          { id: 32, name: "Nebraska" }, 
          { id: 33, name: "Nevada" }, 
          { id: 34, name: "New Hampshire" }, 
          { id: 35, name: "New Jersey" }, 
          { id: 36, name: "New Mexico" }, 
          { id: 37, name: "New York" }, 
          { id: 38, name: "North Carolina" }, 
          { id: 39, name: "North Dakota" }, 
          { id: 40, name: "Northern Mariana Islands" }, 
          { id: 41, name: "Ohio" }, 
          { id: 42, name: "Oklahoma" }, 
          { id: 43, name: "Oregon" }, 
          { id: 44, name: "Palau" }, 
          { id: 45, name: "Pennsylvania" }, 
          { id: 46, name: "Puerto Rico" }, 
          { id: 47, name: "Rhode Island" }, 
          { id: 48, name: "South Carolina" }, 
          { id: 49, name: "South Dakota" }, 
          { id: 50, name: "Tennessee" }, 
          { id: 51, name: "Texas" }, 
          { id: 52, name: "Utah" }, 
          { id: 53, name: "Vermont" }, 
          { id: 54, name: "Virgin Islands" }, 
          { id: 55, name: "Virginia" }, 
          { id: 56, name: "Washington" }, 
          { id: 57, name: "West Virginia" }, 
          { id: 58, name: "Wisconsin" }, 
          { id: 59, name: "Wyoming" }
        ]}
      />
      <div style={{padding: '25px', border: '1px solid navy'}}>
        Pasta
        Gambori
      </div>
    </div>
  );
}

export default App;
