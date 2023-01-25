"use client"
import './globals.css'
import Head from 'next/head'
import Navagation from './navbar'
import Context from "./Context";
import { AuthProvider } from '../context/AuthContext';
import BodyWrapper from '../components/BodyWrapper';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <Head />


      <body>
        <AuthProvider>
          <Navagation />
          <BodyWrapper>
            <Context>{children}</Context>
          </BodyWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
