import { useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Shared/Providers/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const { registerUser, updateUserProfile } = useContext(AuthContext)
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState();
    // const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Password does not match",
            text: "Please make sure the passwords match.",
          });
          return;
        }
    
        registerUser (data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://summer-school-server-tau.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };
    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const photoUrl = form.photoUrl.value;
    //     const password = form.password.value;
    //     const confirmPassword = form.confirmPassword.value
    // if (password !== confirmPassword) {
    //     setError("Passwords do not match.");
    //     return;
    // }

    // if (password.length < 6) {
    //     setError("Password must be at least 6 characters long.");
    //     return;
    // }
    // if (!/[A-Z]/.test(password)) {
    //     setError("Password must contain at least one capital letter.");
    //     return;
    // }

    // if (!/[!@#$%^&*]/.test(password)) {
    //     setError("Password must contain at least one special character.");
    //     return;
    // }


    // const handleCheckboxChange = () => {
    //     setShowPassword(!showPassword);
    // };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card dark light flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                              <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password"  {...register("confirmPassword", { required: true })} placeholder="confirm-password" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">password does not match</span>}
                        </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
        // <div>
        //     <h1 className='text-blue-900 text-2xl text-center mt-4'>Please Register</h1>
        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <form onSubmit={handleRegister} className="card-body">
        //                 {error && (
        //                     <div className="alert alert-error mb-4">{error}</div>
        //                 )}
        //                 {
        //                     success && (
        //                         <div className="alert  alert-success mb-4">{success}</div>
        //                     )}
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input name='name' type="text" placeholder="name" className="input input-bordered" />
        //                 </div>

        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Photo Url</span>
        //                     </label>
        //                     <input name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input name='confirmPassword' type={showPassword ? "text" : "password"} placeholder="confirm password" className="input input-bordered" required />
        //                 </div>
        //                 {/* click on show password  */}

        //                 <div className="form-control">
        //                     <label className="label cursor-pointer">
        //                         <span className="label-text">Show Password</span>
        //                         <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox" />
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <button className="btn btn-primary">Register</button>
        //                 </div>
        //                 <p>Don t have an account please ? <Link className='text-blue-800 font-semibold underline' to='/login'>Login</Link></p>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Register;