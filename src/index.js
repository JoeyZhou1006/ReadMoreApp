import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import SignIn from './components/SignIn';
import RegisteredUsers from './components/RegisteredUsers';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
import Article from './components/Article';
import { AuthProvider }  from './AuthContext';

const App = () => (
    <div>
      <Router>
        <AuthProvider>
            <NavigationBar />
            <hr />
            <Switch>
              <Route exact path="/" component={Article} />
              <Route path="/registeredusers" component={RegisteredUsers} />
              <Route path="/signin" component={SignIn} />
              <Route component={NotFound} />
            </Switch>

        </AuthProvider>
      </Router>
    </div>
  );



ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
