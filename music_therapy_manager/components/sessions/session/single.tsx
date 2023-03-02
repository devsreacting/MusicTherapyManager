"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Label, Timeline, TextInput, Card } from "flowbite-react";
import type { FC } from "react";
import {
    HiCog,
    HiDotsVertical,
    HiDownload,
    HiHome,
    HiArrowNarrowRight,
    HiCalendar,
    HiPrinter,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../navagation/navbar-sidebar";

const SessionSinglePage: FC = function () {
    return (
        <NavbarSidebarLayout>
            <Menu />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-full m-4 md:mx-6 md:mt-6 xl:mb-2">
                    <Breadcrumb className="mb-4">
                        <Breadcrumb.Item href="#">
                            <div className="flex items-center gap-x-3">
                                <HiHome className="text-xl" />
                                <span className="dark:text-white">Home</span>
                            </div>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/sessions">
                            Sessions
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Session 1</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Session
                    </h1>
                </div>
                <div className="col-span-12 mx-4 mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 md:mx-6 lg:my-6 xl:col-span-10 xl:col-start-2 xl:p-8 2xl:col-span-8 2xl:col-start-3">
                    <Session />
                </div>
            </div>
        </NavbarSidebarLayout>
    );
};

const Menu: FC = function () {
    return (
        <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-3 flex items-center dark:divide-gray-700 sm:mb-0 sm:divide-x sm:divide-gray-100">
                <form className="flex-auto lg:pr-3" action="#" method="GET">
                    <Label htmlFor="invoice-search" className="sr-only">
                        Search
                    </Label>
                    <div className="relative sm:w-64 md:w-96">
                        <TextInput
                            id="invoice-search"
                            name="invoice-search"
                            placeholder="Search for invoice number"
                            type="search"
                        />
                    </div>
                </form>
                <div className="ml-auto flex space-x-1 pl-2">
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
                        <span className="sr-only">Settings</span>
                        <HiDotsVertical className="text-2xl" />
                    </a>
                </div>
            </div>
            <div className="items-center space-y-4 sm:inline-flex sm:space-y-0 sm:space-x-4">
                <div>
                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
                    >
                        <HiDownload className="text-2xl" />
                        Download Invoice
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto"
                    >
                        <HiPrinter className="text-2xl" />
                        Print
                    </a>
                </div>
            </div>
        </div>
    );
};

const Session: FC = function () {
    return (
        <div className="overflow-hidden p-4 md:p-8">
            <div className="sm:flex flex-wrap">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 1
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 2
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 3
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 4
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 5
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title>
                                Question 6
                            </Timeline.Title>
                            <Timeline.Body>
                                Answer Lorem Ipsum Dolor Sit Amet
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
            <div className="sm:flex flex-wrap mt-11">
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        General Notes
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lacus, cursus id velit ut, sollicitudin tincidunt augue. Sed ut convallis nisi. Nulla eu fringilla mauris. Phasellus in libero pellentesque, gravida dolor eget, tempor nulla. Curabitur velit erat, tristique et ipsum maximus, eleifend rhoncus orci. Morbi semper mi nisl, vitae finibus velit egestas non. Praesent efficitur nulla urna, sed consequat leo tincidunt a.
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lacus, cursus id velit ut, sollicitudin tincidunt augue. Sed ut convallis nisi. Nulla eu fringilla mauris. Phasellus in libero pellentesque, gravida dolor eget, tempor nulla. Curabitur velit erat, tristique et ipsum maximus, eleifend rhoncus orci. Morbi semper mi nisl, vitae finibus velit egestas non. Praesent efficitur nulla urna, sed consequat leo tincidunt a.
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lacus, cursus id velit ut, sollicitudin tincidunt augue. Sed ut convallis nisi. Nulla eu fringilla mauris. Phasellus in libero pellentesque, gravida dolor eget, tempor nulla. Curabitur velit erat, tristique et ipsum maximus, eleifend rhoncus orci. Morbi semper mi nisl, vitae finibus velit egestas non. Praesent efficitur nulla urna, sed consequat leo tincidunt a.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default SessionSinglePage;
