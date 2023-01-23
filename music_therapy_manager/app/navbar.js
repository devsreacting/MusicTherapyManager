import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">
      Home
    </Link>
    <Link href="/invoices">
      Invoices
    </Link>
    <Link href="/patients">
      Patients
    </Link>
    <Link href="/account">
      Account
    </Link>
  </nav>
);


export default Navbar;