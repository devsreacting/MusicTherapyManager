"use client";

import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function UserDashboard() {
    const [_document, set_document] = useState(null)
    const { logout } = useAuth()

    useEffect(() => {
        set_document(document)
    }, [])

    if (!_document) { return null }


    return (
        <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5'>
            <p>This is the User Dashboard. You're logged in!</p>
            <h2 onClick={() => {
                logout()
            }} className='select-none duration-300 hover:pl-2 cursor-pointer'>Logout</h2>
        </div>
    )
}