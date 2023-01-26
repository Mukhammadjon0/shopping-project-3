import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Favorites from "./page/Favorities/Favorites";
import Home from "./page/Home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Users from "./page/Users/Users";
import ProtectedRouter from "./ProtectedRouter";

function App() {
  const users = useSelector((state) => state.users.users);
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const user = useSelector((state) => state.users.user);
  const basket = useSelector((state) => state.basket.basket);


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [users, loggedIn, user, basket]);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
