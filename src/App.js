import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import AuthProvider from './Component/Login/AuthProvider';
import Appointement from './Component/Appointement/Appointement';
import PrivateRoute from './Component/Login/PrivateRoute';
import Deshboard from './Component/Appointement/Deshboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashbord">
              <Deshboard></Deshboard>
            </PrivateRoute>
            <PrivateRoute path="/appointement">
              <Appointement></Appointement>
            </PrivateRoute>
           
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
