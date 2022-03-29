import axios from 'axios'
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../redux/user/userReducer'
import { fetchUsers } from '../redux/user/userAction'
function UserContainer() {

const state=useSelector((state)=>state)
 const dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchUsers())
},[])

  return (
      <>
    <div>UserContainer</div>
    {
        state.loading?<h2>Loading</h2>:
        state.error?<h1>Error</h1>:(
            <>
            {state.users.map((user,index)=><p key={index}>{user.name}</p>)}
            </>
        )
    }
    </>
  )
}

export default UserContainer