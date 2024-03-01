import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo= {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
        })
    }
  return (
    <div className="pb-8 px-8">
        <div className="divider"></div>
      <div>
        <button
        onClick={handleGoogleSignIn}
        className="btn w-full border border-orange-600 hover:bg-orange-600 hover:text-white">
          <FaGoogle></FaGoogle>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
