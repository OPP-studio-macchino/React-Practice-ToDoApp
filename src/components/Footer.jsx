import React from 'react'


const date = new Date();

function Footer() {
    return (
    <footer>
        <small>Copyright {date.getFullYear()}</small>
    </footer>
    )
}

export default Footer