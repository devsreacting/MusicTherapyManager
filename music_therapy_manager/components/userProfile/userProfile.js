"use client"

import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'

export default function UserProfile() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [userInfo, setUserInfo] = useState(null);

    const { currentUser } = useAuth()

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setUserInfo(docSnap.data())
                } else {
                    setUserInfo({})
                }
            } catch (err) {
                setError('Failed to load todos')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{userInfo.name}'s Profile</h1>
            <p>Email: {currentUser.email}</p>
        </div>
    );

    return { loading, error, todos, setTodos }
}