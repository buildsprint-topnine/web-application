import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import plantImg from "../plant 1.png";

const initUser = {
  email: "",
  password: ""
};

export default function Login(props) {
  const [user, setUser] = useState(initUser);

  const handleSubmit = e => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://bw-my-top-nine.herokuapp.com/auth/login",
      data: user
    };
    axios(options)
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard/home");
      })
      .catch(err => {
        alert("An error occurred!");
      });
  };

  const handleInput = e =>
    setUser({ ...user, ...{ [e.target.name]: e.target.value } });

  return (
    <div className="lg-container">
      <section className="lg-section">
        <div className="lg-welcome">
          <h2>Welcome Back</h2>
          <p>Log in to continue building your top nine</p>
          <img src={plantImg} alt="nice login"></img>
        </div>
        <form className="lg-form" onSubmit={handleSubmit}>
          <div className="lg-mini-container">
            <h4 style={{ color: "#2f50d7", fontSize: "27px" }}>LOGIN</h4>
            <div className="mini-container">
              Email
              <input
                required
                name="email"
                placeholder="email"
                value={user.email}
                onChange={handleInput}
                className="lg-form-input"
                autoComplete="email"
              />
            </div>
            <div className="mini-container">
              Password
              <input
                required
                name="password"
                value={user.password}
                type="password"
                placeholder="Password"
                onChange={handleInput}
                className="lg-form-input"
                autoComplete="current-password"
              />
            </div>

            <div>
              <button type="submit" className="lg-form-button">
                Login
              </button>
            </div>
            <br></br>
            <NavLink
              className="login-a"
              style={{ color: "#4183c4", fontSize: "14px" }}
              exact
              to="/signup"
            >
              SignUp Instead
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
}
