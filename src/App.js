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
    console.log(`Received to signup ${email} ${password}... NYI`);
  });

  const loginWithEmail = useCallback((email, password) => {
    // TODO IMPLEMENT
    console.log(`Received to login ${email} ${password}... NYI`);
  });

  const loginWithGoogle = useCallback(() => {
    // TODO IMPLEMENT
    console.log(`Triggered Login with Google`);
  });

  const logout = useCallback(() => {
    // TODO IMPLEMENT
    console.log(`Triggered Logout`);
  });

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <button onClick={logout}>Logout</button>
        </nav>
        <Switch>
          <ProtectedRoute path="/login" isProtected={false} user={user}>
            <Login
              loginWithEmail={loginWithEmail}
              loginWithGoogle={loginWithGoogle}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/signup" isProtected={false} user={user}>
            <Signup signUp={signUp} />
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
