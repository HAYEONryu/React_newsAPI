import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import MakeUser from './pages/MakeNick';
import { UserProvider } from './contexts/userprovider';

const App = () => {
  return (
    <UserProvider>
      <Switch>
          <Route path="/" exact component={MakeUser}  />
          <Route path="/:category?" component={NewsPage} />
      </Switch>
    </UserProvider>
  );
};

export default App;