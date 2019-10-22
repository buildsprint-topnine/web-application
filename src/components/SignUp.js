import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import coffeeImage from '../coffee.png'

const SignUp = props => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    let isError = false;
    if (nameRef.current.value === '') {
      setError("Please enter a valid Username!");
      isError = true;
    }
    if (passwordRef.current.value === '') {
      setError("Please enter a valid password!");
      isError = true;
    }
    if (emailRef.current.value === '') {
      setError("Please enter a valid email!");
      isError = true;
    }
    return isError
  }

  const submit = () => {
    let valid = validate();
    if (valid) {
      return
    }
    setLoading(true);
    axios
      .post("https://bw-my-top-nine.herokuapp.com/auth/register", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      .then(response => {
        setLoading(false);

        localStorage.setItem('token', response.data.token)
        props.history.push("/dashboard/home");
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="su-container">
      <div className="su-text">
        <p className="su-text-p">Welcome To My Top Nine</p>
      </div>
      <section className="su-section">
        <h2>SignUp</h2>
        <p style={{color: '#f35667'}}>{error}</p>
        <div className="mini-container">
          <p> Username </p>
          <input className="su-input" ref={nameRef} type="text" />
        </div>
        <div className="mini-container">
          <p>  Email  </p>
          <input className="su-input" ref={emailRef} type="text" />
        </div>
        <div className="mini-container">
          <p> Password </p>
          <input className="su-input" ref={passwordRef} type="text" />
        </div>
        <div className="mini-container">
          <button onClick={submit} className="su-form-button">{loading ? "Loading" : "Submit"}</button>
        </div>
        <Link to="/"> <p>Log in instead</p> </Link>
      </section>
    </div >
  );
};
export default SignUp;
