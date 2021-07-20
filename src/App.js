import "./App.css";
import { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProtectedRoute from "./shared/ProtectedRoute";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const signUp = useCallback((email, password) => {
    // TODO IMPLEMENT
  });

  const loginWithEmail = useCallback((email, password) => {
    // TODO IMPLEMENT
  });

  const loginWithGoogle = useCallback(() => {
    // TODO IMPLEMENT
  });

  const logout = useCallback(() => {
    // TODO IMPLEMENT
  });

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <button>Logout</button>
        </nav>
        <Switch>
          <ProtectedRoute path="/login" isProtected={false} user={user}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/signup" isProtected={false} user={user}>
            <Signup />
          </ProtectedRoute>
          <ProtectedRoute path="/landing" isProtected={true} user={user}>
            <Landing />
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
