import React from 'react'
import "./globals.css"
import Header from '@/components/Header'
import Head from "./head"
import Providers from './Providers'
import Tabs from '@/components/Tabs'
const Layout = ({children}) => {
  return (
<html lang='en'>
    <body>
      <Providers>
      <Head/>
      <Header/>
      <Tabs/>
      </Providers>
        {children}
    </body>
</html>  )
}

export default Layout