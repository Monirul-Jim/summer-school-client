import { useContext } from "react";
import { AuthContext } from "../../../Shared/Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { handleWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const loginWithGooglePopup = () => {
        handleWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,photoUrl:loggedInUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center pb-4">
                <button onClick={loginWithGooglePopup} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;