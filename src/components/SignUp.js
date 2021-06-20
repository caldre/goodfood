import React, { useState } from "react";
import { MainContent } from "./styled";
// import { auth } from "../firebase/config";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <MainContent>
      <h2>Sign Up!</h2>
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
    </MainContent>
  );
};

export default SignUp;
