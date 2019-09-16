import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClickerComponent from './components/clicker.component';
import NavComponent from './components/nav.component';
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})
import PokeComponent from './components/poke.component';

const App: React.FC = () => { // app is a function component because it just runs immediately, it is the store!
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch /* switch different routes based on routers, clicking a component opens new route*/>
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/poke" component={PokeComponent} />
          <Route component={ClickerComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
