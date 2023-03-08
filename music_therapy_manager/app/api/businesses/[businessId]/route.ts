import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

export async function GET(request: NextRequest) {
  // Get the business ID from the request URL
  const id = request.nextUrl.pathname.split('/')[3];

  if (!id) {
    return new NextResponse('Missing business ID', { status: 400 });
  }

  // Get the business document from Firestore
  const businessRef = doc(db, 'businesses', id);
  const businessSnap = await getDoc(businessRef);

  if (!businessSnap.exists()) {
    return new NextResponse('Business not found', { status: 404 });
  }

  // Return the business data as JSON
  const businessData = businessSnap.data();

  return new NextResponse(JSON.stringify(businessData), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}