import { Link, Outlet } from "react-router-dom";
// import useAdmin from "../../../hooks/useAdmin/useAdmin";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin=true
    return (
        <div className="drawer lg:drawer-open space-x-4 mt-8">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li className="text-2xl"><Link to="/dashboard/home">Admin Home</Link></li>
                            <li  className="text-2xl"><Link to="/dashboard/my-cart"> my cart</Link></li>
                            <li  className="text-2xl"><Link to="/dashboard/all-users"> All Users</Link></li>
                            
                        </> : <>
                            <li  className="text-2xl"><Link to="/dashboard/home">User Home</Link></li>
                            <li  className="text-2xl"><Link to="/dashboard/reservations"> Reservations</Link></li>
                            <li  className="text-2xl"><Link to="/dashboard/history">Payment History</Link></li>
                            <li  className="text-2xl">
                                <Link to="/dashboard/mycart"> My Cart
                                    {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                </Link>

                            </li>
                        </>
                    }




                    <div className="divider"></div>
                    <li  className="text-2xl"><Link to="/">Home</Link> </li>
                    <li  className="text-2xl"><Link to="/menu"> Our Menu</Link></li>
                    <li  className="text-2xl"><Link to="/order/salad">Order Food</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;