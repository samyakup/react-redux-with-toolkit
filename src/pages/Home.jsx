import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import {setLoginId } from '../slices'

export default function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveUser = () => {
    dispatch(setLoginId(23))
    navigate('/sign-in')
  }

  return (
    <div>
      <h3>Home</h3>
      <button onClick={saveUser}>save</button>
    </div>
  )
}
