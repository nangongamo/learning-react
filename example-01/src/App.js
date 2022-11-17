import './App.css';
import Clock from './component/Clock';
import { Form, Toggle } from './component/Toggle';
import { Greeting, LoginControl, Mailbox } from './component/Login';
import { Page } from './component/Page';
import { NumberList } from './component/NumberList';
import { NameForm } from './component/NameForm';
import { FlavorForm } from './component/FlavorForm';
import { Reservation } from './component/Reservation';
import { Calculator } from './component/Calculator';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Clock />
      <Form />
      <Toggle />
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <NumberList numbers={numbers} />
      <NameForm />
      <FlavorForm />
      <Reservation />
      <Calculator />
    </div>
  );
}

export default App;