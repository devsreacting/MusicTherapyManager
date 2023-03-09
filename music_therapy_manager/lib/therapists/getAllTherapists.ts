
export default async function getAllTherapists(businessId: string) {
  const res = await fetch(`http://localhost:3000/api/businesses/${businessId}/therapists`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}