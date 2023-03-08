import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc,collection,getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID from the request URL
  const id = request.nextUrl.pathname.split('/')[3];
  console.log(id)
  if (!id) {
    return new NextResponse('Missing business ID', { status: 400 });
  }

  // Get the business document from Firestore
  const businessRef = doc(db, 'businesses', id);
  const businessSnap = await getDoc(businessRef);

  if (!businessSnap.exists()) {
    return new NextResponse('Business not found', { status: 404 });
  }

// Get all therapist documents under this business
const therapistsRef = collection(db,'businesses',id,'therapists');
const therapistsSnap = await getDocs(therapistsRef);
const therapistsData: { id: string; }[] = [];
therapistsSnap.forEach(doc => {
    therapistsData.push({...doc.data(), id: doc.id});
});

console.log(therapistsData)

// Return the therapists data as JSON
return new NextResponse(JSON.stringify(therapistsData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
});
}