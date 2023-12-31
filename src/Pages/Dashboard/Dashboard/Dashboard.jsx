import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import useCourses from "../../../hooks/useCourses/useCourses";
import useInstructor from "../../../hooks/useInstructor/useInstructor";
import { FaAddressBook, FaHome, FaMarker, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const [course] = useCourses()
    return (
        <div className="drawer lg:drawer-open space-x-4">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#6e668e]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {/* {isAdmin && (
                        <>
                            <li className="text-2xl"><Link to="/dashboard/home">Admin Home</Link></li>
                            <li className="text-2xl"><Link>My Cart</Link></li>
                            <li className="text-2xl"><Link to='all-users'>All Users</Link></li>
                        </>
                    )}
                    {isInstructor && !isAdmin && (
                        <>
                            <li className="text-2xl"><Link to="/dashboard/home">Instructor Home</Link></li>
                            <li className="text-2xl"><Link to='my-classes'>Instructor Classes</Link></li>
                            <li className="text-2xl">
                                <Link to="/dashboard/my-cart">Classes
                                    <span className="badge inl badge-secondary">+{course?.length || 0}</span>
                                </Link>
                            </li>
                        </>
                    )}
                    {!isAdmin && !isInstructor && (
                        <>
                            <li className="text-2xl"><Link to="/dashboard/home">User Home</Link></li>
                            <li className="text-2xl"><Link to='my-classes'>Enrolled Classes</Link></li>
                            <li className="text-2xl">
                                <Link to="/dashboard/my-cart">Classes
                                    <span className="badge inl badge-secondary">+{course?.length || 0}</span>
                                </Link>
                            </li>
                        </>
                    )} */}




                    {isAdmin ? (
                        <>
                            <li className="text-2xl">
                                <Link to="/dashboard/home"><FaHome></FaHome> Admin Home</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to='approved-classes'><FaMarker></FaMarker>Approved Classes</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="all-users"><FaUsers></FaUsers>All Users</Link>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <li className="text-2xl">
                                <Link to="/dashboard/instructor"><FaHome></FaHome> Instructor Home</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="add-classes"><FaAddressBook></FaAddressBook> AddClasses</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="instructor-classes">My Classes</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="text-2xl">
                                <Link to="/dashboard/user"><FaHome></FaHome> User Home</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="my-classes">Enrolled Classes</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="/dashboard/my-cart">
                                    Classes
                                    <span className="badge inl badge-secondary">+{course?.length || 0}</span>
                                </Link>
                            </li>
                        </>
                    )}
                <div className="divider"></div>
                <li className="text-2xl"><Link to="/">Home</Link> </li>
                <li className="text-2xl"><Link to="/classes">Classes</Link></li>
            </ul>

        </div>
        </div >
    );
};

export default Dashboard;