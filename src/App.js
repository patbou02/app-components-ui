import Button from './Button';

function App() {
  return (
    <div>
      <h1>App</h1>
      <div><Button outline rounded>Click me!</Button></div>
      <div><Button primary outline rounded>Buy Now!</Button></div>
      <div><Button secondary outline rounded>See Deal!</Button></div>
      <div><Button warning outline rounded>Hide Ads!</Button></div>
      <div><Button danger rounded>Something...</Button></div>
    </div>
  );
}

export default App;