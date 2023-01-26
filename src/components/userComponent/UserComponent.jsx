import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteUser} from '../../redux/userSlice'
import '../../page/Users/Users.css'
function UserComponent({name, id, email, parol}) {
  const dispatch=useDispatch()
  const delBtn=()=>{
    dispatch(deleteUser(id))
  }
  return (
    <div className='users-info'>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <button onClick={delBtn}>Delete</button>


    </div>
  )
}

export default UserComponent