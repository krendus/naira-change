import React, { FC, PropsWithChildren } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-[100dvh] flex flex-col'>
        <Nav />
        <div className='flex-1'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout