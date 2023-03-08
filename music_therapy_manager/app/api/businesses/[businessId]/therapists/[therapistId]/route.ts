import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID and therapist ID from the request URL
    const businessId = request.nextUrl.pathname.split('/')[3];
    const therapistId = request.nextUrl.pathname.split('/')[5];
console.log(businessId, therapistId)
  if (!businessId || !therapistId) {
    return new NextResponse('Missing business ID or therapist ID', { status: 400 });
  }

  // Get the business document from Firestore
  const businessRef = doc(db, 'businesses', businessId);
  const businessSnap = await getDoc(businessRef);

  if (!businessSnap.exists()) {
    return new NextResponse('Business not found', { status: 404 });
  }

// Get the therapist document from Firestore
    const therapistRef = doc(db, 'businesses', businessId, 'therapists', therapistId);
   
const therapistSnap = await getDoc(therapistRef);

if (!therapistSnap.exists()) {
    return new NextResponse('Therapist not found', { status: 404 });
}

// Return the therapists data as JSON
return new NextResponse(JSON.stringify({...therapistSnap.data(), id: therapistSnap.id}), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
});
}