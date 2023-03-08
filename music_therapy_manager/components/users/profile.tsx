'use client'
import { Breadcrumb } from "flowbite-react";
import type { FC } from "react";
import { HiHome } from "react-icons/hi";
import NavbarSidebarLayout from "../navagation/navbar-sidebar";
import React, { useEffect } from 'react';
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'

const UserProfilePage: FC = function () {
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  // const [userInfo, setUserInfo] = useState(null);
  const { currentUser } = useAuth()

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, 'users', currentUser.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          // setUserInfo(docSnap.data())
        } else {
          // setUserInfo({})
        }
      } catch (err) {
        // setError('Failed to load user data')
        console.log(err)
      } finally {
        // setLoading(false)
      }
    }
    fetchData()
  }, [])

  // if (!userInfo) {
  //   return <div>Loading...</div>;
  // }

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
            <Breadcrumb.Item href="/users/list">Users</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Profile
          </h1>
        </div>
        <div className="col-span-full xl:col-auto">
          {/* <ProfileIntro userInfo={userInfo} /> */}
        </div>
        <div className="col-span-2">
          <GeneralInformation />
          {/* <ProgressBars /> */}
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

// const ProfileIntro: FC = function () {
//   return (
//     <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
//       <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
//         <img
//           alt=""
//           src="../../images/users/jese-leos-2x.png"
//           className="mb-2 h-20 w-20 rounded-lg"
//         />
//         <div>
//           <h2 className="text-xl font-bold dark:text-white text-black">Firstname Lastname</h2>
//           <ul className="mt-2 space-y-1">
//             <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
//               <HiBriefcase className="mr-2 text-lg text-gray-900 dark:text-gray-100" />
//               Front-end Developer
//             </li>
//             <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
//               <HiMap className="mr-2 text-lg text-gray-900 dark:text-gray-100" />
//               San Francisco, USA
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="sm:flex xl:block xl:space-y-4">
//         <div className="sm:flex-1">
//           <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
//             <div className="mt-4">Email address</div>
//             <a
//               className="text-sm font-medium text-gray-900 dark:text-white"
//               href="mailto:webmaster@flowbite.com"
//             >
//               yourname@flowbite.com
//             </a>
//             <div className="mt-4">Home address</div>
//             <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               92 Miles Drive, Newark, NJ 07103, California, <br />
//               United States of America
//             </div>
//             <div className="mt-4">Phone number</div>
//             <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               +00 123 456 789 / +12 345 678
//             </div>
//           </address>
//         </div>
//         <div className="hidden sm:flex-1">
//           <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
//             About
//           </h3>
//           <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
//             Dedicated, passionate, and accomplished Full Stack Developer with 9+
//             years of progressive experience working as an Independent Contractor
//             for Google and developing and growing my educational social network
//             that helps others learn programming, web design, game development,
//             networking.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Skills: FC = function () {
//   return (
//     <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
//       <div className="flow-root">
//         <h3 className="text-xl font-bold dark:text-white">Skills</h3>
//         <ul className="mt-4 flex flex-wrap gap-2">
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Brand Design
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Logo Design
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Mobile App Design
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               UI Design
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               React Developer
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Wordpress
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Sketch
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Figma
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Prototyping
//             </Badge>
//           </li>
//           <li>
//             <Badge color="success" size="xl" className="font-normal">
//               Database
//             </Badge>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const Hobbies: FC = function () {
//   return (
//     <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
//       <div className="flow-root">
//         <h3 className="text-xl font-bold dark:text-white">Hobbies</h3>
//         <ul className="mt-4 flex flex-wrap gap-2">
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Football
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Dogs
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Gaming
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Movies
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Travelling
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Surf
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               Ice Skating
//             </Badge>
//           </li>
//           <li>
//             <Badge color="primary" size="xl" className="font-normal">
//               The Witcher
//             </Badge>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const GeneralInformation: FC = function () {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <h3 className="mb-4 text-xl font-bold dark:text-white text-gray-900">
        General information
      </h3>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="text-lg font-medium text-gray-900 dark:text-white">
            About me
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
            Education
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            Thomas Jeff High School, Stanford University
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Work History
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            Twitch, Google, Apple
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Join Date
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            12-09-2021
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Languages
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            English, German, Italian, Spanish
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Organization
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            Themesberg LLC
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Role
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            Graphic Designer
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Department
          </dt>
          <dd className="text-sm font-semibold text-gray-900 dark:text-white">
            Marketing
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
      </dl>
    </div>
  );
};

// const ProgressBars: FC = function () {
//   return (
//     <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-8 2xl:gap-24">
//         <div className="space-y-6">
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Figma
//             </div>
//             <Progress progress={95} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Php
//             </div>
//             <Progress progress={55} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               HTML
//             </div>
//             <Progress progress={85} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               React
//             </div>
//             <Progress progress={65} color="dark" />
//           </div>
//         </div>
//         <div className="space-y-6">
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Vue
//             </div>
//             <Progress progress={45} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Marketing
//             </div>
//             <Progress progress={90} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Product Design
//             </div>
//             <Progress progress={99} color="dark" />
//           </div>
//           <div>
//             <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
//               Angular
//             </div>
//             <Progress progress={45} color="dark" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default UserProfilePage;
