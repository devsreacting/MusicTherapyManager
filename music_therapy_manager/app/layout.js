"use client"
import './globals.css'
import Head from 'next/head'
import Navagation from './navbar'
import Context from "./Context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <Head />
     
      
      <body>
      <Navagation />
      <Context>{children}</Context>
      </body>
    </html>
  )
}
