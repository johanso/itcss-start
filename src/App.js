import React from 'react'
// Components
import Header from './components/Header'
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header title="FirstApp" />

            <div className="container mt-xlarge">
                Content
            </div>

            <Footer />
        </>
    )
}

export default App
