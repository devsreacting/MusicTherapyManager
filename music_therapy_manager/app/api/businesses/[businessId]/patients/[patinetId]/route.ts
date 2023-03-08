import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID and patient ID from the request URL
  const businessId = request.nextUrl.pathname.split('/')[3];
    const patientId = request.nextUrl.pathname.split('/')[5];
    
  
  if (!businessId || !patientId) {
    return new NextResponse('Missing business ID or patient ID', { status: 400 });
  }

  // Get the therapist document that contains the specified patient
  const therapistsRef = collection(db,'businesses',businessId,'therapists');
  const therapistsSnap = await getDocs(therapistsRef);
  
  let patientData;
  
  for (const therapistDoc of therapistsSnap.docs) {
    // Get the specified patient document under this therapist
    const patientRef = doc(db,'businesses',businessId,'therapists',therapistDoc.id,'patients',patientId);
    const patientSnap = await getDoc(patientRef);
    
    if (patientSnap.exists()) {
      // Get all invoice documents under this patient
      const invoicesRef = collection(db,'businesses',businessId,'therapists',therapistDoc.id,'patients',patientId,'invoices');
      const invoicesSnap = await getDocs(invoicesRef);
      
      // Get all session documents under this patient
      const sessionsRef = collection(db,'businesses',businessId,'therapists',therapistDoc.id,'patients',patientId,'sessions');
      const sessionsSnap = await getDocs(sessionsRef);
      
      // Store the data in an object
      patientData = {
        ...patientSnap.data(),
        id: patientSnap.id,
        invoices: invoicesSnap.docs.map(doc => ({...doc.data(), id: doc.id})),
        sessions: sessionsSnap.docs.map(doc => ({...doc.data(), id: doc.id}))
      };
      
      break;
    }
  }

// Return the patients data as JSON
return new NextResponse(JSON.stringify(patientData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
});
}