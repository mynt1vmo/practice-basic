import React from 'react'
import Header from '../component/Header'

const Home = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Home
