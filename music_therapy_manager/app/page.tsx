"use client"

import { useAuth } from '../context/AuthContext'
import Login from "../components/Login"
import List from "../components/users/list"



export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
    
    
    </div>
  )
}