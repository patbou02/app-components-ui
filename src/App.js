// import AccordionPage from './pages/AccordionPage';
// import ButtonPage from './pages/ButtonPage';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

function App() {

  const [selection, setSelection] = useState(null);

  const handleSelection = option => {
    setSelection(option);
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div>
      {/*<ButtonPage />*/}
      {/*<AccordionPage />*/}
      <Dropdown options={options} selection={selection} onSelect={handleSelection} />
    </div>
  );
}

export default App;