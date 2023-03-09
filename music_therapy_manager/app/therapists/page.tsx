"use client"
import useSWR from 'swr'
import UserListPage from "../../components/users/list";
import getAllTherapists from "../../lib/therapists/getAllTherapists"

export default async function Page() {
  const { data: therapists } = await useSWR("therapists", () => getAllTherapists("9XBVJWSvtLZYPl0wOwH6"))
 
  if (!therapists) {
    return <div>Loading...</div>
  }

  return (
    <UserListPage data={therapists} />
  )
}
