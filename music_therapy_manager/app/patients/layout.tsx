import getAllPatients from "../../lib/patients/getAllPatients"
import UserListPage from "../../components/users/list";
import { ReactNode } from "react";

// export const dynamic = 'force-dynamic'
export const revalidate = 0
interface UsersLayoutProps {
  children: ReactNode;
}
const UsersLayout = async ({ children }: UsersLayoutProps) => {
  const users = await getAllPatients("9XBVJWSvtLZYPl0wOwH6");
  // const users = await getAllPatients("ILDqZyVxunIaQ0kC6iXm");

  return (
    <>
      <UserListPage users={users} />
      <main>{children}</main>
    </>
  )
}

export default UsersLayout