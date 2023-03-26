import getAllTherapists from "../../lib/therapists/getAllTherapists"
import UserListPage from "../../components/users/list";
import { ReactNode } from "react";

// export const dynamic = 'force-dynamic'
export const revalidate = 0
interface UsersLayoutProps {
  children: ReactNode;
}
const UsersLayout = async ({ children }: UsersLayoutProps) => {
  const users = await getAllTherapists("ILDqZyVxunIaQ0kC6iXm");

  return (
    <>

      <UserListPage users={users} />

      <main>{children}</main>
    </>
  )
}

export default UsersLayout