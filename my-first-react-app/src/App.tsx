import React from 'react'; // import info from react
import './include/bootstrap'; // import bootstrap for HTML
import './App.css'; // import stylesheet
import { HashRouter, BrowserRouter } from 'react-router-dom'; // ???import router functionality
import { Switch, Route } from 'react-router'; // ???import route functionality
// #region Components importing
import { FirstComponent } from './components/my-first-component';
import SecondComponent from './components/my-second-component';
import NavComponent from './components/nav-component';
import { ClickerComponent } from './components/clicker-component';
import NumComp from './components/num-comps/num-comp';
import RandomComponent from './components/random-component';
import { SpinningAtom } from './components/spinning-atom';
import { LukeComponent } from './components/luke-component';
import { KHComponent } from './components/kh-component';
import { SpinnerComponent } from './components/spinner-component';
import BallComponent from './components/ball-component';
import { dieRollerComponent } from './components/dice-roller-component';
import JessicaComponent from './components/jessicas-component';
import FunComponent from './components/fun-page-component';
import { MiguelComponent } from './components/miguel-component';
import { ArrayComponent } from './components/array-component';
import { PokeComponent } from './components/poke-component';
import { EdImdbComponent } from './components/ed-imdb-component';
import { ProgJokes } from './components/prog-jokes';
// #endregion


/*
  Components
  Components makeup the abstract structure from which an application can be built.
  Components are intended to be reusable, flexible sections of a website, that
  maintain their own state and behavior.

  There are primarily two ways to define a component.  The first, is by extending
  the React.Component class. The second is a "Function Component" which is used
  for simpler components that don't need any additional behavior.

  All components require method: render

  The render method returns an HTML-like syntax that is used to then
  render the component by React. Function components are essentially components
  that only have a render method.
*/
const App: React.FC = () => { // this is a function component
  return (
    // render URL as /#/route-name
    // <BrowserRouter> is the other primary router available
    // <Switch> - Is a list of Routes that can be rendered
    // based on the URL context of the router
    // localhost:3000/#/first then render FirstComponent in the switch
    <HashRouter>
      <div>
        <NavComponent />
        <Switch>
          <Route path="/first" component={FirstComponent} />
          <Route path="/second" component={SecondComponent} />
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/sum" component={NumComp} />
          <Route path="/random" component={RandomComponent} />
          <Route path="/spinning-atom" component={SpinningAtom} />
          <Route path="/luke" component={LukeComponent} />
          <Route path="/kh" component={KHComponent} />
          <Route path="/spinner" component={SpinnerComponent} />
          <Route path="/spinning-atom" component={SpinningAtom} />
          <Route path="/ball" component={BallComponent} />
          <Route path="/dieRoller" component={dieRollerComponent} />
          <Route path="/Jessica" component={JessicaComponent} />
          <Route path="/fungame" component={FunComponent} />
          <Route path="/miguel" component={MiguelComponent} />
          <Route path="/arrays" component={ArrayComponent} />
          <Route path="/poke" component={PokeComponent} />
          <Route path="/edimdb" component={EdImdbComponent} />
          <Route path="/prog-jokes" component={ProgJokes} />
          <Route component={FirstComponent} />
        </Switch>
      </div>
    </HashRouter> // last one is a default route that displays if no other route would apply
    // Nav Component is nested in the imported Router and Switch is also from the router package

  );
}

export default App; // how it reads to export out this big ole thing
