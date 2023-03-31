"use client"
import './globals.css';
import Head from 'next/head';
import NavbarSidebarLayout from '../layouts/navbar-sidebar';

import { PropsWithChildren } from 'react';
import { AuthProvider } from '../context/AuthContext';
import { StrictMode } from "react";
import { Flowbite } from "flowbite-react";
import { NextPage } from 'next';
import theme from "./flowbite-theme";

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}

    <Head children={undefined} />

    <body className="bg-gray-50 dark:bg-gray-900">
      
      <AuthProvider>
        <StrictMode>
      <Flowbite theme={{ theme }}> 
        <NavbarSidebarLayout>
       
            {children}
    
        </NavbarSidebarLayout>
        </Flowbite>
        </StrictMode>
      </AuthProvider>
  
    </body>
  </html>
);

export default RootLayout;
