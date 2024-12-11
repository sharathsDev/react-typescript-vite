import { useState } from 'react';
import Button from './components/props/Button';
import Greeting from './components/props/Greeting';
import Heading from './components/props/Heading';
import Input from './components/props/Input';
import Oscar from './components/props/Oscar';
// import Person from './components/props/Person';
// import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import { statusValues } from './types/componentTypes';
import Container from './components/props/Container';
import LoggedIn from './components/states/LoggedIn';
import UserState from './components/states/UserState';
import Counter from './components/states/Counter';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContextProvider';
import UserContextProvider from './components/context/UserContextProvider';
import User from './components/context/User';
import Timer from './components/effect/Timer';
import { CounterClass } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
const App = () => {
  const [name, setName] = useState<string>('');

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // };

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne',
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent',
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana',
  //   },
  // ];

  return (
    <div>
      <Status status={statusValues.loading} />
      <Heading>this is the heading!</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <Greeting name={name} messageCount={0} isLoggedIn={true} />

      <Button handleClick={(e, id) => console.log(e.target, id)} />
      <Input value={name} handleChange={(e) => setName(e.target.value)} />
      <LoggedIn />
      <UserState />
      <Container
        style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
      >
        <Counter />
      </Container>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Timer />
      <CounterClass message="The count value is " />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List items={['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman', 'Green Lantern', 'Cyborg']} onClick={item => console.log(item)} />
      <List items={[1, 2, 3, 4, 5, 6]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          { id: 1, name: 'Batman' },
          { id: 2, name: 'Superman' },
          { id: 3, name: 'Wonder Woman' },
          { id: 4, name: 'Flash' },
          { id: 5, name: 'Aquaman' },
          { id: 6, name: 'Green Lantern' },
          { id: 7, name: 'Cyborg' },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;
