"use client"

import { useAuth } from '../context/AuthContext'
import Login from "../components/Login"
import UserDashboard from "../components/UserDashboard"



export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </div>
  )
}