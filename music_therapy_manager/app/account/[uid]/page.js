"use client"

// import UserProfile from '../../../components/userProfile/userProfile';
import UserProfilePage from '../../../components/users/profile'

export default function Page({ params }) {
    // return <UserProfile userId={params.uid} />;
    return <UserProfilePage userId={params.uid} />
}