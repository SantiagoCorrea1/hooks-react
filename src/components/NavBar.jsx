import { Link, NavLink } from "react-router"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <Link className="navbar-brand" href="#">UseContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

               <NavLink 
                    className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/">
                    HOME
               </NavLink>

               <NavLink 
                    className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/about">
                    ABOUT
               </NavLink>

               <NavLink 
                    className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                    to="/login">
                    LOGIN
               </NavLink>
            </ul>
        </div>
    </nav>
  )
}

