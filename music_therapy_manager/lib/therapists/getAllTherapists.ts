
export default async function getAllTherapists(businessId: string) {
  const res = await fetch(`api/businesses/${businessId}/therapists`)
console.log(res.json())
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}