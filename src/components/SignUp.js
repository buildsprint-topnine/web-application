import React, { useRef, useState } from "react";
import axios from "axios";

const SignUp = props => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    axios
      .post("https://bw-my-top-nine.herokuapp.com/auth/register", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      .then(response => {
        setLoading(false);

        // localStorage.setItem('token', response.data.token)
        props.history.push("/");
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <h2>SignUp</h2>
      <div>
        Username
        <input className="Input" ref={nameRef} type="text" />
      </div>
      <div>
        Email
        <input className="Input" ref={emailRef} type="text" />
      </div>
      <div>
        Password
        <input className="Input" ref={passwordRef} type="text" />
      </div>
      <div>
        <button onClick={submit}>{loading ? "Loading" : "Submit"}</button>
      </div>
    </div>
  );
};
export default SignUp;
