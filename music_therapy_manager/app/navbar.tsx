import './globals.css'
import Link from 'next/link'
import { FaGuitar } from 'react-icons/fa'
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { useAuth } from '../context/AuthContext'



function Navagation(): JSX.Element {
  const { logout, currentUser } = useAuth()
  console.log(currentUser);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">

        <FaGuitar className="text-3xl" />
        <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
          Music Therapy Manager
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {currentUser && (
          <div>
            <Dropdown
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">UserName</span>
                <span className="block truncate text-sm font-medium">
                  username@email.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Invoices</Dropdown.Item>
              <Dropdown.Item>Patients</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => { logout() }} >Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/dashboard">
          <Navbar.Link >Dashboard</Navbar.Link>
        </Link>
        <Link href="/invoices">
          <Navbar.Link >Invoices</Navbar.Link>
        </Link>
        <Link href="/patients">
          <Navbar.Link href="/patients">Patients</Navbar.Link>
        </Link>
        <Link href="/contact">
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navagation