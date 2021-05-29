import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import bilbos_green_door from "../../images/bag_end_door.png";
import the_shire from "../../images/shire.png";
import '../styles/auth.css';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  let openDoor = false;
  let shireZoom = false;
  if (user) {
    openDoor = true
    setTimeout(() => {
      shireZoom = true;
      console.log("AM I TRUE: ", shireZoom)
      setTimeout(() => {
        history.push('/');
      }, 5000)
    }, 1000)
  }

  return (
    <>
      <h1 id="hobbetsy-title">Hobbetsy</h1>
      <div className="form-image-container">
        <div className="shire-image-container">
          <img src={the_shire} />
        </div>
        <div className={`door-image-container ${openDoor ? "door-open" : ""}`}>
          <img src={bilbos_green_door} />
        </div>
        <div className="form-container">
          <form onSubmit={onSignUp}>
            <div>
              <label>User Name</label>
              <input
                className="login-form-input"
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                className="login-form-input"
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                className="login-form-input"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <label>Repeat Password</label>
              <input
                className="login-form-input"
                type="password"
                name="repeat_password"
                placeholder="Re-enter Password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button className="login-submit-btn" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
