import React from "react";
import UserComponent from '../../components/userComponent/UserComponent'
import { useSelector } from "react-redux";
import './Users.css'
function Users() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="users">
      {users.length>0?(
        users.map((user)=> <UserComponent key={user.id} {...user}/>)
      ) :(
        <h1>User not Found</h1>
      )}
    </div>
  );
}

export default Users;
