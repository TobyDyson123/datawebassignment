import logo from './images/logos/logo-black-small-transparent.png'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="logo-container">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="space">
                    <span></span>
                </div>
                <div className="admin-container">
                    <Link to="/login"><u>Admin Login</u></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;