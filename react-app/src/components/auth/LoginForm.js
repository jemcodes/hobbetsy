import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import bilbos_green_door from "../../images/bag_end_door.png";
import the_shire from "../../images/shire.png";
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
  if (user) {
    openDoor = true
    setTimeout(() => {
      history.push('/');
    }, 1000)
  }

  return (
    <>
      <h1 id="hobbetsy-title">Hobbetsy</h1>
      <div className="form-image-container">
        <div className="shire-image-container">
          <img src={the_shire} width="414px" />
        </div>
        <div className={`door-image-container ${openDoor ? "door-open" : ""}`}>
          <img src={bilbos_green_door} width="414px" />
        </div>
        <div className="form-container">
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
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
                name="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={updatePassword}
              />
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
