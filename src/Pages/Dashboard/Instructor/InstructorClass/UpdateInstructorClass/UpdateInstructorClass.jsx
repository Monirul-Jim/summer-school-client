import { useContext } from "react";
import { AuthContext } from "../../../../../Shared/Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure/useAxiosSecure";

const UpdateInstructorClass = ({_id}) => {
    const { user } = useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
   
    const handleUpdateClasses = (event) => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const name = form.name.value
        const instructorName = user ? user.displayName : form.instructorName.value
        const email = user ? user.email : form.email.value;
        const price = parseFloat(form.price.value)
        const available_seats = parseInt(form.seats.value)
        const updateClasses = { photo, name, instructorName, email, price, available_seats }

        axiosSecure
            .put(`/update-class/${_id}`, updateClasses) // Use the put() method of axiosSecure to send the PUT request
            .then((response) => {
                if (response.data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You have updated the class",
                        icon: "success",
                        confirmButtonText: "Go Back",
                    });
                }
            })
            .catch((error) => {
                // Handle error
                console.log(error);
            });


    }
    return (
        <div className="mt-8">
            <form onSubmit={handleUpdateClasses} >
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Give a Photo url?</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name?</span>
                        </label>
                        <input type="text" name='name' placeholder="added a class name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name='instructorName' defaultValue={user?.displayName} placeholder="seller-name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">available_seats</span>
                        </label>
                        <input type="text" name='seats' placeholder="available-seats" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" required />
                    </div>
                </div>
                <input type="submit" className='btn btn-block mt-4' value="Add Toy" />
            </form>
        </div>
    );
};

export default UpdateInstructorClass;