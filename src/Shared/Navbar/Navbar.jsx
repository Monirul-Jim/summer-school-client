import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import useCourses from "../../hooks/useCourses/useCourses";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [course] = useCourses()
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li className="text-xl"><Link to='/'>Home</Link></li>
        <li className="text-xl"><Link to='/instructor'>Instructors</Link></li>
        <li className="text-xl"><Link to='/classes'>Classes</Link></li>
        {
            user && <li className="text-xl"><Link to='dashboard'>Dashboard
                <div className="badge badge-secondary">+{course?.length || 0}</div>
            </Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Kids</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img title={user?.displayName} className='h-12 w-12 rounded-full' src={user?.photoURL} alt="Profile Picture" />
                    }

                    {
                        user ? <Link><button onClick={handleLogout} className="btn ms-2 btn-primary btn-sm">Logout</button></Link> :
                            <Link to='/login'><button className="btn btn-primary btn-sm">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;