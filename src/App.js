import Auth from './components/Auth/Auth.js';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Posts from './components/Posts/Posts.js';
import NewPost from './components/NewPost/NewPost.js';
import EditPost from './components/EditPost/EditPost.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route path="/todos/edit/:id" component={EditPost} />
        <Route path="/todos/new" component={NewPost} />
        <Route path="/todos" component={Posts} />
        <Route exact path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
