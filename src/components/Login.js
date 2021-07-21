import React, { useState } from "react";

const Login = ({ loginWithEmail, loginWithGoogle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (email.length > 5 && password.length > 5) {
              loginWithEmail(email, password);
            }
          }}
        >
          Login With Email
        </button>

        <h2>With Google</h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            loginWithGoogle();
          }}
        >
          Log In With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
