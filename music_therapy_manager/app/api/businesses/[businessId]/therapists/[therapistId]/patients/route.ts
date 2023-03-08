import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID and therapist ID from the request URL
    const businessId = request.nextUrl.pathname.split('/')[3];
    const therapistId = request.nextUrl.pathname.split('/')[5];
    if (!businessId || !therapistId) {
        return new NextResponse('Missing business ID or therapist ID', { status: 400 });
      }
    
      // Get all patient documents under this therapist
      const patientsRef = collection(db,'businesses',businessId,'therapists',therapistId,'patients');
      const patientsSnap = await getDocs(patientsRef);
      const patientsData: { id: string; sessions?: any[]; invoices?: any[]; }[] = [];
      for (const patientDoc of patientsSnap.docs) {
        // Get all session documents under this patient
        const sessionsRef = collection(db,'businesses',businessId,'therapists',therapistId,'patients',patientDoc.id,'sessions');
        const sessionsSnap = await getDocs(sessionsRef);
        const sessionsData: any[] = [];
        sessionsSnap.forEach(doc => {
          sessionsData.push({...doc.data(), id: doc.id});
        });
    
        // Get all invoice documents under this patient
        const invoicesRef = collection(db,'businesses',businessId,'therapists',therapistId,'patients',patientDoc.id,'invoices');
        const invoicesSnap = await getDocs(invoicesRef);
        const invoicesData: any[] = [];
        invoicesSnap.forEach(doc => {
          invoicesData.push({...doc.data(), id: doc.id});
        });
    
    // Add the patient data to the array
    patientsData.push({
          ...patientDoc.data(),
          id: patientDoc.id,
          sessions: sessionsData,
          invoices: invoicesData,
    });
    }
    
    // Return the patients data as JSON
    return new NextResponse(JSON.stringify(patientsData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
    });
    }