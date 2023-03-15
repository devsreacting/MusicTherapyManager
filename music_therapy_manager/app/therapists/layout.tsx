 import getAllTherapists from "../../lib/therapists/getAllTherapists"
 import UserListPage from "../../components/users/list";

// // export const dynamic = 'force-dynamic'
// export const revalidate = 0

// interface UsersLayoutProps {
//   children: React.ReactNode;
//   users: any[]; // replace any with the appropriate type for users
// }

// const UsersLayout: React.FC<UsersLayoutProps> = async ({ children, ...UsersLayoutProps }) => {
//   const users =  getAllTherapists("ILDqZyVxunIaQ0kC6iXm");

//   return (
//    <>
//        <UserListPage users={users} />
  
//       <main>{children}</main>
//  </>
//   )
// }

// export default UsersLayout

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
  }) {
    const users =  getAllTherapists("ILDqZyVxunIaQ0kC6iXm");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}