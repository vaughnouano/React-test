import { Link } from "react-router-dom"

function AboutPage() {

    return (
        <>
        <div>
            <h1>This is the introduction to the about page</h1>
        </div>
        <div>
            <p>This is the content of the about page</p>
        </div>
        <div>
            <Link to="/">Go to home</Link>
        </div>
        
        </>
    )

}

export default AboutPage