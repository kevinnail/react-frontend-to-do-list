import Auth from './components/Auth/Auth.js';
// import Posts from './components/Posts/Posts.js';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { useUser } from './context/UserContext.js';
import Header from './components/Header/Header.js';
import Posts from './components/Posts/Posts.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts" component={Posts} />
        <Route exact path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
