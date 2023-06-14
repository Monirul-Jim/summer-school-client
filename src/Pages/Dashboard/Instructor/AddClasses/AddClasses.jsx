import { useContext } from "react";
import { AuthContext } from "../../../../Shared/Providers/AuthProviders";
import Swal from "sweetalert2";

const AddClasses = () => {
    const {user}=useContext(AuthContext)
    const handleAddedClasses = (event) => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const name = form.name.value
        const instructorName =  user ? user.displayName : form.instructorName.value
        const email = user ? user.email : form.email.value;
        const price = parseFloat(form.price.value)
        const available_seats = parseInt(form.seats.value)
        const addClasses = { photo, name, instructorName, email, price, available_seats}
        fetch('https://summer-school-server-tau.vercel.app/addClasses', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClasses)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'You have added a class',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })


    }
    return (
        <div className='bg-slate-300 p-4'>
        <form onSubmit={handleAddedClasses}>
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
                    <input type="email" name='email'  defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" required />
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

export default AddClasses;