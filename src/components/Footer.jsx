import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="c-footer">
            <p className="c-footer__copy"> © {year}  All rights reserved.  </p>
        </footer>
    )
}

export default Footer
