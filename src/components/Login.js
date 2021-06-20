import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainContent } from "./styled";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainContent>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name">email</label>
        <input
          type="email"
          name="user-name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Log in</button>
      </form>
      <Link to="/signup">Sign up here!</Link>
    </MainContent>
  );
};

export default Login;
