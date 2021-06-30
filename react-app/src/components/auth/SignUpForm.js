import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import bilbos_green_door from "../../images/bag_end_door.png";
import the_shire from "../../images/shire.png";
import AuthNavBar from './AuthNavBar';
import Footer from '../Footer';
import '../styles/auth.css';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const formData = await dispatch(signUp(username, email, password));
      if (formData.errors) {
        setErrors(formData.errors)
      }
    } else {
      setErrors(["Passwords must match"])
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
  if (user) {
    openDoor = true
    setTimeout(() => {
      history.push('/');
    }, 1000)
  }

  return (
    <div className="auth-black-back">
      <AuthNavBar />
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
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
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
      {<Footer />}
    </div>
  );
};

export default SignUpForm;
