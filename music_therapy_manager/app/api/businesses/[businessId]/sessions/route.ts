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
  
  const sessionsData: { id: string; }[] = [];
  
  for (const therapistDoc of therapistsSnap.docs) {
    // Get all patient documents under this therapist
    const patientsRef = collection(db,'businesses',businessId,'therapists',therapistDoc.id,'patients');
    const patientsSnap = await getDocs(patientsRef);
    
    for (const patientDoc of patientsSnap.docs) {
      // Get all session documents under this patient
      const sessionsRef = collection(db,'businesses',businessId,'therapists',therapistDoc.id,'patients',patientDoc.id,'sessions');
      const sessionsSnap = await getDocs(sessionsRef);
      
      sessionsSnap.forEach(doc => {
        sessionsData.push({...doc.data(), id: doc.id});
      });
    }
  }

// Return the sessions data as JSON
return new NextResponse(JSON.stringify(sessionsData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
});
}