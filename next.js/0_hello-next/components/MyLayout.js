
/*
    components/MyLayout.js
*/

// IMPORTS
import Header from './Header'

// STYLES
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

// Layout component
const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout