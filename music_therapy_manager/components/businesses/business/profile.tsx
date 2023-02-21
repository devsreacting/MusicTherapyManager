'use client'
import { Breadcrumb, Progress, Button } from "flowbite-react";
import type { FC } from "react";
import { HiBriefcase, HiHome, HiMap } from "react-icons/hi";
import NavbarSidebarLayout from "../../navagation/navbar-sidebar";
import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../../../context/AuthContext'

const BusinessProfilePage: FC = function ({ userId }) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [userInfo, setUserInfo] = useState(null);
    const { currentUser } = useAuth()

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setUserInfo(docSnap.data())
                } else {
                    setUserInfo({})
                }
            } catch (err) {
                setError('Failed to load user data')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <NavbarSidebarLayout>
            <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
                <div className="col-span-full mb-4 xl:mb-2">
                    <Breadcrumb className="mb-4">
                        <Breadcrumb.Item href="#">
                            <div className="flex items-center gap-x-3">
                                <HiHome className="text-xl" />
                                <span className="dark:text-white">Home</span>
                            </div>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/businesses/">Businesses</Breadcrumb.Item>
                        <Breadcrumb.Item href="/businesses/client-1">Client 1</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white sm:text-2xl">
                        Profile
                    </h1>
                </div>
                <div className="col-span-full xl:col-auto">
                    <ProfileIntro />
                </div>
                <div className="col-span-2">
                    <GeneralInformation />
                </div>
            </div>
        </NavbarSidebarLayout>
    );
};

const ProfileIntro: FC = function () {
    return (
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
                <img
                    alt=""
                    src="../../images/businesses/photo.jpeg"
                    className="mb-2 h-20 w-20 rounded-lg"
                />
                <div>
                    <h2 className="text-xl font-bold dark:text-white text-black">Firstname Lastname</h2>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <HiBriefcase className="mr-2 text-lg text-gray-900 dark:text-gray-100" />
                            Client Info
                        </li>
                        <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <HiMap className="mr-2 text-lg text-gray-900 dark:text-gray-100" />
                            Client Info 2
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sm:flex xl:block xl:space-y-4">
                <div className="sm:flex-1">
                    <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                        <div className="mt-4">Email address</div>
                        <a
                            className="text-sm font-medium text-gray-900 dark:text-white"
                            href="mailto:client1@gmail.com"
                        >
                            client1@gmail.com
                        </a>
                        <div className="mt-4">Home address</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            92 Miles Drive, Newark, NJ 07103, California, <br />
                            United States of America
                        </div>
                        <div className="mt-4 mb-2">Invoices</div>
                        <Button href="/businesses/client-1/invoices" className='inline-flex' color="light">
                            View
                        </Button>
                    </address>
                </div>
            </div>
        </div>
    );
};

const GeneralInformation: FC = function () {
    return (
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-4 text-xl font-bold dark:text-white text-gray-900">
                General information
            </h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <dt className="text-lg font-medium text-gray-900 dark:text-white">
                        Client Notes
                    </dt>
                    <dd className="mt-1 max-w-prose space-y-3 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                            Tincidunt quam neque in cursus viverra orci, dapibus nec
                            tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed.
                            Cursus risus congue arcu aenean posuere aliquam.
                        </p>
                        <p>
                            Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                            rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                            senectus vitae. Scelerisque fermentum, cursus felis dui
                            suspendisse velit pharetra. Augue et duis cursus maecenas eget
                            quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                            dictum risus suspendisse.
                        </p>
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Phone Number
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        123-123-1234
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Birthday
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        15-08-1990
                    </dd>
                </div>
            </dl >
        </div >
    );
};


export default BusinessProfilePage;
