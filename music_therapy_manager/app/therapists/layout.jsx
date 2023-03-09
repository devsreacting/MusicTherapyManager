import getAllTherapists from "../../lib/therapists/getAllTherapists"
import UserListPage from "../../components/users/list";

// export const dynamic = 'force-dynamic'
export const revalidate = 0

const UsersLayout = async ({ children }) => {
  const users = await getAllTherapists("ILDqZyVxunIaQ0kC6iXm");

  return (
    <section className='flex'>
      <aside className='w-1/3 lg:w-1/4'>
        <UserListPage users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout