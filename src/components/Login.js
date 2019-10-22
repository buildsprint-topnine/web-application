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
        console.log(res.data);

        window.localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard/home");
      })
      .catch(err => {
        console.log(err);
        alert("An error occurred!");
      });
  };

  const handleInput = e =>
    setUser({ ...user, ...{ [e.target.name]: e.target.value } });

  return (
    <div className="lg-container">
      <div className="lg-welcome">
        <h2>Welcome Back</h2>
        <p>Log in to continue building your top nine</p>
        <img src={plantImg} alt="nice login"></img>
      </div>
      <form className="lg-form" onSubmit={handleSubmit}>
        <h4 style={{ color: "#1F43D4" }}>LOGIN</h4>
        <div>
          <input
            required
            name="email"
            placeholder="email"
            value={user.email}
            onChange={handleInput}
            className="lg-form-input"
          />
        </div>
        <div>
          <input
            required
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={handleInput}
            className="lg-form-input"
          />
        </div>

        <div>
          <button type="submit" className="lg-form-button">
            Login
          </button>
        </div>
        <br></br>
        <p>Or create an account today ? </p>
        <NavLink style={{ color: "red", fontSize: "20px" }} exact to="/signup">
          SignUp
        </NavLink>
      </form>
    </div>
  );
}
