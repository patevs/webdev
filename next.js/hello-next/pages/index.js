
/*
    pages/index.js
*/

// IMPORTS

// This is the Link API
import Link from 'next/link'

// layout component
import Layout from '../components/MyLayout'

// Index component
export default () => (
    <Layout>
        <h1>Home Page</h1>
        <hr />
        <p>Hello Next.js</p>
    </Layout>
)

/*
const Index = () => (
    <div>
        <Link href="/about">
            <button>Go to About Page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index
*/

// <a style={{ fontSize: 20 }}>About Page</a>