"use client"

import React from 'react'
import UserSettingsPage from "../../../../components/users/settings"
import { useAuth } from '../../../../context/AuthContext'

export default function settings() {
    const { } = useAuth()
    return (
        <UserSettingsPage />
    )
}
