import { GoBell, GoCloudOffline, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      <div><Button className="mb-5" primary outline rounded>
        <GoBell />
        Click me!
      </Button></div>
      <div><Button className="mb-5" secondary outline rounded>Buy Now!</Button></div>
      <div><Button className="mb-5" success outline rounded>
        <GoCloudOffline />
        See Deal!</Button></div>
      <div><Button className="mb-5" warning outline rounded>Hide Ads!</Button></div>
      <div><Button className="mb-5" danger outline rounded>
        <GoDatabase />
        Something...</Button></div>
    </div>
  );
}

export default ButtonPage;