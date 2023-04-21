export default async function getAllPatients(businessId: string) {
  const res = await fetch(`http://localhost:3000/api/businesses/${businessId}/patients`)

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}