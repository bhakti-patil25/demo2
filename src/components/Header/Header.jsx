import { Link } from "react-router-dom"
import './Header.css'

const Header = () =>{
    return (
        <header id="header">
            <div id="main-div">
                <a id="clgname" > Vivekanand College </a>
            </div>
            <nav className="navbar">
                <Link to='/' className="nav-item"> Home </Link>
                <Link to='/about' className="nav-item"> About</Link>
                <Link to='/courses' className="nav-item">Courses</Link>
                <Link to='/contact' className="nav-item">Contact</Link>
                <Link to='/admission' className="nav-item"> <button class="btn">Apply Now</button> </Link>
                
            </nav>
        </header>
    )
}

export default Header 