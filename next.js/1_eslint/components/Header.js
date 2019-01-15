
/*
    components/Header.js
*/

// IMPORTS
import Link from 'next/link'

// STYLES
const linkStyle = {
    marginRight: 15
}

// Header component
const Header = () => (
    <div>
        <Link href="/">
            <button style={linkStyle}>HOME</button>
        </Link>
        <Link href="/about">
            <button style={linkStyle}>ABOUT</button>
        </Link>
    </div>
)

export default Header
