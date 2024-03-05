import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import login from '../../assets/home/login.jpg'

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left" data-aos="fade-left" data-aos-duration="1000">
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
            <img src={login} alt="" />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="card border border-orange-600 md:w-1/2 max-w-sm bg-orange-50">
            <form onSubmit={handleLogin} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="ml-2">
                <small>
                  Do not have account?{" "}
                  <Link to="/signUp" className="text-orange-500 underline">
                    Register here.
                  </Link>
                </small>
              </p>
              <div className="form-control">
                <input
                  // Todo: Apply disable for re captcha
                  disabled={false}
                  type="submit"
                  value="Login"
                  className="btn w-full bg-orange-600 hover:bg-orange-500 text-white"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
