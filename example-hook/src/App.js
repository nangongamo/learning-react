import './App.css';
import { Example,TextInputWithFocusButton } from './example';
import { Theme } from './theme';
import { Counter } from './counter';

function App() {
  return (
    <div className="App">
      <Example />
      <br />
      <Theme />
      <br />
      <Counter initialCount={0} />
      <br />
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
