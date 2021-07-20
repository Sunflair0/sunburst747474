import React, { useCallback, useState } from "react";

const Signup = ({ signUp }) => {
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
              signUp(email, password);
            }
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
