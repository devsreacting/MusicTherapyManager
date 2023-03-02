'use client'

import {
  Breadcrumb,
  Button,
  Card,
  Label,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import type { FC } from "react";
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import {
  HiCloudUpload,
  HiDesktopComputer,
  HiDeviceMobile,
  HiHome,
} from "react-icons/hi";
import NavbarSidebarLayout from "../navagation/navbar-sidebar";
import { useAuth } from '../../context/AuthContext'
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UserSettingsPage: FC = function ({ userId }) {
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
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (!userInfo || loading) {
    return <div>Loading...</div>;
  }
  return (
    <NavbarSidebarLayout>
      <>
        <div className="grid grid-cols-1 gap-y-6 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4">
          <div className="col-span-full">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/users/list">Users</Breadcrumb.Item>
              <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              User settings
            </h1>
          </div>
          <div className="col-span-full xl:col-auto">
            <div className="grid grid-cols-1 gap-y-4">
              <UserProfileCard userInfo={userInfo} />
              <PasswordInformationCard />
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-y-4">
              <GeneralInformationCard userInfo={userInfo} />
            </div>
          </div>
        </div>
      </>
    </NavbarSidebarLayout>
  );
};

const UserProfileCard: FC = function ({ userInfo }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (userInfo.personal_information.first_name) {
      setFirstName(userInfo.personal_information.first_name)
    }
  }, []);
  return (
    <Card>
      <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
        <img
          alt=""
          src={url}
          className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
            {userInfo.personal_information.first_name} {userInfo.personal_information.last_name}
          </h3>
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Software Engineer
          </div>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <HiCloudUpload className="mr-2 text-gray-500" />
            Change picture
          </a>
        </div>
      </div>
    </Card>
  );
};

const GeneralInformationCard: FC = function ({ userInfo }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null)
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    if (userInfo.personal_information.first_name) {
      setFirstName(userInfo.personal_information.first_name)
    }
    if (userInfo.personal_information.last_name) {
      setLastName(userInfo.personal_information.last_name)
    }
    if (userInfo.personal_information.email) {
      setEmail(userInfo.personal_information.email)
    }
  }, []);

  const { currentUser } = useAuth()

  useEffect(() => {
    async function addInformation() {
      try {
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
          'personal_information': {
            "first_name": firstName,
            "last_name": lastName,
            "email": email
          }
        }, { merge: true })
        if (docSnap.exists()) {
          setUserInformation(docSnap.data())
        } else {
          setUserInformation({})
          console.log('doesnt')
        }
        console.log('success')
      } catch (err) {
        setError('Failed to load user data')
      } finally {
        // setLoading(false)
      }
    }
    addInformation()
  }, [firstName, lastName, email])

  return (
    <Card>
      <h3 className="mb-4 text-xl font-bold dark:text-white text-gray-900">
        General information
      </h3>
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="first-name">First Name</Label>
            <TextInput
              id="first-name"
              name="first-name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Bonnie"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="last-name">Last Name</Label>
            <TextInput
              id="last-name"
              name="last-name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Green"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="example@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="country">Country</Label>
            <TextInput
              id="country"
              name="country"
              placeholder="United States"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="city">City</Label>
            <TextInput
              id="city"
              name="city"
              placeholder="San Francisco"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="address">Address</Label>
            <TextInput
              id="address"
              name="address"
              placeholder="California"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="phone-number">Phone Number</Label>
            <TextInput
              id="phone-number"
              name="phone-number"
              placeholder="e.g., +(12)3456 789"
              required
              type="tel"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};

const PasswordInformationCard: FC = function () {
  return (
    <Card>
      <h3 className="mb-4 text-xl font-bold dark:text-white text-gray-900">
        Password information
      </h3>
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="current-password">Current password</Label>
            <TextInput
              id="current-password"
              name="current-password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="new-password">New password</Label>
            <TextInput
              id="new-password"
              name="new-password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <TextInput
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="col-span-full">
            <div className="text-sm font-medium dark:text-white">
              Password requirements:
            </div>
            <div className="mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Ensure that these requirements are met:
            </div>
            <ul className="space-y-1 pl-4 text-gray-500 dark:text-gray-400">
              <li className="text-xs font-normal">
                At least 10 characters (and up to 100 characters)
              </li>
              <li className="text-xs font-normal">
                At least one lowercase character
              </li>
              <li className="text-xs font-normal">
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
              <li className="text-xs font-normal">Some text here zoltan</li>
            </ul>
          </div>
          <div className="col-span-6 text-gray-900">
            <Button>Save all</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};


export default UserSettingsPage;
