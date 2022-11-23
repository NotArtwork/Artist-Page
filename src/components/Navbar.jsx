import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link
                className='link' to='/'>
                <h3 className='navLogo'>Sabrina's Pandas</h3>
            </Link>

            <Link
                className='link' to='/about'>
                <p>About</p>
            </Link>

            <Link
                className='link' to='/discover'>
                <p>Discover</p>
            </Link>

            <Link
                className='link' to='/commissions'>
                <p>Commissions</p>
            </Link>

            <Link
                className='link' to='/signup'>
                <p>Sign Up</p>
            </Link>

            <button className='signInBtn'>Sign In</button>
        </div>
    )
}

export default Navbar;