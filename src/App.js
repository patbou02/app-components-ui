import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';

function App() {

  return (
    <div>
      <Link to="/accordion">Go to Accordion page</Link>
      <Link to="/button">Go to Button page</Link>
      <Link to="/dropdown">Go to Dropdown page</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;