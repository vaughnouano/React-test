import { Link } from "react-router-dom"

function HomePage() {

    return (
        <div>
            <h1>Hello, this is the homepage</h1>
            <Link to="/about">Go to About Page</Link>
        </div>
        
    )
}

export default HomePage