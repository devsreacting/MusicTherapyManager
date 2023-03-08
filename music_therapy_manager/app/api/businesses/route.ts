import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

// GET /businesses
export async function GET() {
  const businessesRef = collection(db, 'businesses');
  const businessesSnap = await getDocs(businessesRef);

  const businesses = businessesSnap.docs.map((doc) => (
  {
   
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json(businesses);
}