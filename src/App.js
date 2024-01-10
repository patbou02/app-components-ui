import { GoBell, GoCloudOffline, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <h1>App</h1>
      <div><Button primary outline rounded>
        <GoBell />
        Click me!
      </Button></div>
      <div><Button secondary outline rounded>Buy Now!</Button></div>
      <div><Button success outline rounded>
        <GoCloudOffline />
        See Deal!</Button></div>
      <div><Button warning outline rounded>Hide Ads!</Button></div>
      <div><Button danger outline rounded>
        <GoDatabase />
        Something...</Button></div>
    </div>
  );
}

export default App;