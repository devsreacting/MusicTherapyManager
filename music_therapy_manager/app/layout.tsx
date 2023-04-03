"use client"
import './globals.css'
import Head from 'next/head'
import NavbarSidebarLayout from "../layouts/navbar-sidebar";
import Context from "./Context";
import { PropsWithChildren } from "react";
import { AuthProvider } from '../context/AuthContext';
import BodyWrapper from '../components/BodyWrapper';
import { NextPage } from 'next';


const RootLayout: NextPage<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <Head children={undefined} />


      <body>

        <AuthProvider>
          <BodyWrapper>
            <NavbarSidebarLayout>
              <Context>{children}</Context>
            </NavbarSidebarLayout>
          </BodyWrapper>
        </AuthProvider>

      </body>
    </html>
  )
}
export default RootLayout