import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout