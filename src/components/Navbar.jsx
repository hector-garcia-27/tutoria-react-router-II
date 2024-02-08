
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    return (
        <nav>
            <span className='base'>logo</span>
            <div className='links'>
                <NavLink to='/' className={`base ${setActiveClass}`}>Home</NavLink>
                <NavLink to='/personajes' className={`base ${setActiveClass}`}>Personajes</NavLink>
            </div>
        </nav>
    )
}

export default Navbar