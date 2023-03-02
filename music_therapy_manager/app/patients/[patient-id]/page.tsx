"use client"

// import PatientProfile from '../../../components/PatientProfile/PatientProfile';
import PatientProfilePage from '../../../components/patients/profile/profile'

export default function Page({ params }) {
    // return <PatientProfile userId={params.uid} />;
    return <PatientProfilePage userId={params.uid} />
}