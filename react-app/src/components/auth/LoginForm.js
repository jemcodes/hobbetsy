import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import bilbos_green_door from "../../images/bag_end_door.png";
import the_shire from "../../images/shire.png";
import AuthNavBar from './AuthNavBar';
import Footer from '../Footer';
import '../styles/auth.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  let openDoor = false;
  // TODO ZOOM let shireZoom = false;
  if (user) {
    openDoor = true
    // TODO ZOOM shireZoom = true;
    setTimeout(() => {
      history.push('/');
    }, 1000)
  }

  return (
    <div className="auth-black-back">
      <AuthNavBar />
      <h1 id="hobbetsy-title">Hobbetsy</h1>
      <div className="form-image-container">
        {/* TODO ZOOM <div className={`shire-image-container ${shireZoom ? "shire-zoom" : ""}`}> */}
        <div className="shire-image-container">
          <img src={the_shire} />
        </div>
        <div className={`door-image-container ${openDoor ? "door-open" : ""}`}>
          <img src={bilbos_green_door} />
        </div>
        <div className="form-container">
          <form onSubmit={onLogin}>
            <div className="error-container">
              {errors.map((error) => (
                <div className="signup-error-messages">{error}</div>
              ))}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="login-form-input"
                name="email"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="login-form-input"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={updatePassword}
              />
            </div>
            <button className="login-submit-btn" type="submit">Login</button>
          </form>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default LoginForm;
