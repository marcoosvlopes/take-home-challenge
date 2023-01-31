// Styles
import './App.css';

// Data
import { mockedData } from "./data/mockedData"

// Components
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {

  // receive the mocked data array
  const [data] = useState(mockedData)

  // filter a value and return results
  const searchValueOnMockedData = (value) => {
    const result = data.filter(i => i.name.toLowerCase().includes(value.toLowerCase()))
    return result.sort((e) => e.name)
  }

  return (
    <div className="App">
      <SearchBar searchValueOnMockedData={searchValueOnMockedData} />
    </div>
  );
}

export default App;
