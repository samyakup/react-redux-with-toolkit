import React from 'react'
import { useSelector } from 'react-redux'

export default function SignIn() {

  const loginId = useSelector(st => st.app.loginId);

  return (
    <div>SignIn {loginId}</div>
  )
}
