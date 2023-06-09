import { useContext } from "react";
import { AuthContext } from "../Shared/Providers/AuthProviders";
import useCourses from "../hooks/useCourses/useCourses";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin/useAdmin";

const ClassesCard = ({ category }) => {
    const [isAdmin] = useAdmin()
    const { image, name, instructor_name, available_seats, price, _id } = category
    const { user } = useContext(AuthContext)
    const [, refetch] = useCourses();
    const location = useLocation()
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const handleAddToCart = category => {
        if (user && user?.email) {
            const courseItem = { menuItemId: _id, instructor_name, name, image, price, email: user.email }
            fetch('http://localhost:5000/course', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'course added on your dashboard',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{instructor_name}</h2>
                <p className="text-2xl">Games: {name}</p>
                <p className="text-2xl">Available Seats:{available_seats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">

                    {isAdmin ? (
                        <button
                            disabled
                            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                        >
                            Select
                        </button>
                    ) : (
                        <button
                            onClick={() => handleAddToCart(category)}
                            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                        >
                            Select
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;