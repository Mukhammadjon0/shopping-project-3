import React from "react";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../redux/userSlice";
import "./Navbar.css";
function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const basket = useSelector((state) => state.basket.basket);
  const logOutBtn = () => {
    dispatch(logOut());
  };
  return (
    <nav>
      <Link className="home-link" to={"/"}>
        Navbar
      </Link>
      <div className="links-set">
        <NavLink className={"nav-link"} to={"/testsAdmin"}>
          TestsAdmin
        </NavLink>
        <NavLink className={"nav-link"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"nav-link"} to={"/users"}>
          Users
        </NavLink>
        <div className="login">
          <NavLink className={"nav-link"} to={"login"}>
            Login
          </NavLink>
          <button onClick={logOutBtn}>LogOut</button>
          <div className="login-info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
        <NavLink className={"nav-link"} to={"favorites"}>
          <div className="like-box">
            <MdFavorite className="favorite-icon" />
            <sup>{basket.length}</sup>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
