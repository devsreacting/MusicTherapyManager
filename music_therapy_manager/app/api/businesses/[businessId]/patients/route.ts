import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID from the request URL
  const businessId = request.nextUrl.pathname.split('/')[3];

  if (!businessId) {
    return new NextResponse('Missing business ID', { status: 400 });
  }

// Get all therapist documents under this business
const therapistsRef = collection(db,'businesses',businessId,'therapists');
const therapistsSnap = await getDocs(therapistsRef);
const patientsData: { id: string; }[] = [];
for (const therapistDoc of therapistsSnap.docs) {
    // Get all patient documents under this therapist
    const patientsRef = collection(db,'businesses',businessId,'therapists',therapistDoc.id,'patients');
    const patientsSnap = await getDocs(patientsRef);
    patientsSnap.forEach(doc => {
        patientsData.push({...doc.data(), id: doc.id});
    });
}

console.log(patientsData)

// Return the patients data as JSON
return new NextResponse(JSON.stringify(patientsData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
});
}