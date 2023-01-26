import React from "react";
import "./Register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    parol: "",
    id: nanoid(),
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      id: nanoid(),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    navigate("/login");
    e.preventDefault();
    dispatch(addUser(newUser));
  };
  const navigate = useNavigate();
  return (
    <div className="register-page">
      <form action="" onSubmit={handleSubmit}>
      <h1>Register</h1>
        <input
          name="name"
          onChange={handleChange}
          required
          type="text"
          placeholder="ism kiriting"
        />
        <input
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="email kiriting"
        />
        <input
          name="parol"
          type="password"
          onChange={handleChange}
          required
          placeholder="parol"
        />
        <button type="submit">Register</button>
        <h2>Already signed up? <Link to={'/login'}>LogIn</Link></h2>
      </form>
    </div>
  );
}

export default Register;
