"use client"
import { useAuth } from '../../context/AuthContext'

export default function AccountPage() {
    const { currentUser } = useAuth();
    return (
        <div>
            <h1>Account Page</h1>
        </div>
    );
}


