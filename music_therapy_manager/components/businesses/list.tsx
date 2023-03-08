"use client"
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiTrash,
} from "react-icons/hi";
import NavbarSidebarLayout from "../navagation/navbar-sidebar";

const BusinessListPage: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/businesses">Businesses</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All Businesses
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <form className="lg:pr-3">
                <Label htmlFor="business-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <TextInput
                    id="business-search"
                    name="business-search"
                    placeholder="Search for businesses"
                  />
                </div>
              </form>
              <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Configure</span>
                  <HiCog className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Delete</span>
                  <HiTrash className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Purge</span>
                  <HiExclamationCircle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Settings</span>
                  <HiDotsVertical className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <AllUsersTable />
            </div>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

const AllUsersTable: FC = function () {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <Label htmlFor="select-all" className="sr-only">
            Select all
          </Label>
          <Checkbox id="select-all" name="select-all" />
        </Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="w-4 p-4">
            <div className="flex items-center">
              <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="sr-only">
                checkbox
              </label>
            </div>
          </Table.Cell>
          <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
            <img
              className="h-10 w-10 rounded-full"
              src="../../images/users/neil-sims.png"
              alt="Neil Sims avatar"
            />
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                <a
                  href="/businesses/client-1/"
                  className="inline-flex cursor-pointer justify-center rounded text-gray-900 dark:text-white"
                > Client 1 </a>
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                client1@gmail.com
              </div>
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <EditUserModal />
              <DeleteUserModal />
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="w-4 p-4">
            <div className="flex items-center">
              <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="sr-only">
                checkbox
              </label>
            </div>
          </Table.Cell>
          <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
            <img
              className="h-10 w-10 rounded-full"
              src="../../images/users/neil-sims.png"
              alt="Neil Sims avatar"
            />
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                <a
                  href="/businesses/client-2/"
                  className="inline-flex cursor-pointer justify-center rounded text-gray-900 dark:text-white"
                > Client 2 </a>
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                client2gmail.com
              </div>
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white"> </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <EditUserModal />
              <DeleteUserModal />
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const EditUserModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="success" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <HiOutlinePencilAlt className="text-lg" />
          Edit user
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Edit user</strong>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <div className="mt-1">
                <TextInput
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <div className="mt-1">
                <TextInput id="lastName" name="lastName" placeholder="Green" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-1">
                <TextInput
                  id="email"
                  name="email"
                  placeholder="example@company.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone number</Label>
              <div className="mt-1">
                <TextInput
                  id="phone"
                  name="phone"
                  placeholder="e.g., +(12)3456 789"
                  type="tel"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <div className="mt-1">
                <TextInput
                  id="department"
                  name="department"
                  placeholder="Development"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <div className="mt-1">
                <TextInput
                  id="company"
                  name="company"
                  placeholder="Somewhere"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="passwordCurrent">Current password</Label>
              <div className="mt-1">
                <TextInput
                  id="passwordCurrent"
                  name="passwordCurrent"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="passwordNew">New password</Label>
              <div className="mt-1">
                <TextInput
                  id="passwordNew"
                  name="passwordNew"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save all
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const DeleteUserModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <HiTrash className="text-lg" />
          Delete user
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
        <Modal.Header className="px-6 pt-6 pb-0">
          <span className="sr-only">Delete user</span>
        </Modal.Header>
        <Modal.Body className="px-6 pt-0 pb-6">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <HiOutlineExclamationCircle className="text-7xl text-red-500" />
            <p className="text-xl text-gray-500">
              Are you sure you want to delete this user?
            </p>
            <div className="flex items-center gap-x-3">
              <Button color="failure" onClick={() => setOpen(false)}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BusinessListPage;
