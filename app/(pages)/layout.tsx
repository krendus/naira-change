import React, { FC, PropsWithChildren } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
        <Nav />
        <div>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout