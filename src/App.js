// import AccordionPage from './pages/AccordionPage';
// import ButtonPage from './pages/ButtonPage';
import Dropdown from './components/Dropdown';

function App() {

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div>
      {/*<ButtonPage />*/}
      {/*<AccordionPage />*/}
      <Dropdown options={options} />
    </div>
  );
}

export default App;