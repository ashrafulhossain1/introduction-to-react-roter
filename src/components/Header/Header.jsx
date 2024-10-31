import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                {/* <Link to="/contact">Contact us</Link> */}
                <NavLink to='/contact'>Contact us</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to='/users'>Users</NavLink>

            </nav>
        </div>
    );
};

export default Header;