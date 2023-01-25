"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useAuth } from '../context/AuthContext'
import Login from "../components/Login"
import UserDashboard from "../components/UserDashboard"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </div>
  )
}