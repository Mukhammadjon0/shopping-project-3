import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { enterUser, logIn } from "../../redux/userSlice";
import "./Login.css";
function Login() {
  const users = useSelector((state) => state.users.users);
  const [user, setUser] = useState({
    email: "",
    parol: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasUser = users.find(
      (item) => item.email === user.email && item.parol === user.parol
    );
    if (hasUser) {
      dispatch(logIn());
      dispatch(enterUser(hasUser));
      navigate("/");
    } else alert("email yoki parol xato!!!");
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          name="email"
          required
          onChange={handleChange}
          type="email"
          placeholder="email"
        />
        <input
          name="parol"
          required
          onChange={handleChange}
          type="password"
          placeholder="parol"
        />
        <button type="submit">LogIn</button>
        <h3 className="register-link">
          Not registered yet? <Link to={"/register"}>Register</Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
