import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disabled, setDisabled] = useState(true);
  const useEmailRef = useRef();
  const { signInUser, signInWithGoogle, resetUserPassword } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validateCaptchaValue = (event) => {
    const captcha = event.target.value;
    if (validateCaptcha(captcha, false) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleResetPassword = () => {
    const email = useEmailRef.current.value;
    console.log(email);
    resetUserPassword(email)
      .then(() => {
        toast.success("Password reset link sent to your email", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast.warning(err.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // const loginForm = { email, password };

    signInUser(email, password)
      .then(() => {
        setSuccess("Login Successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const saveUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        fetch("https://bistor-boss-server.vercel.app/users/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            setError("");
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="py-16 container mx-auto min-h-screen md:flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 p-5">
          <div className="text-center lg:text-left my-10 md:my-0 bg-cover">
            <img
              src={login}
              alt=""
              className="h-full mx-auto w-full object-contain"
            />
          </div>
          {/* form Start */}
          <div className="card w-full md:max-w-[550px] md:mx-auto border border-neutral-300 px-4 py-8 md:p-10">
            <h1 className="text-center text-4xl font-bold">Login</h1>
            {error && (
              <span className="my-5 text-center text-orange-400 font-medium border border-orange-400 p-2 rounded">
                {error}
              </span>
            )}
            {success && (
              <span className="my-5 text-center text-blue-600 font-medium border border-blue-500 p-2 rounded">
                {success}
              </span>
            )}
            <form className="card-body p-0" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  ref={useEmailRef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                    onClick={handleResetPassword}
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate className="py-10" />
                </label>
                <input
                  name="recaptcha"
                  type="text"
                  placeholder="Re-Captcha"
                  className="input input-bordered"
                  required
                  onChange={validateCaptchaValue}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn btn-primary border-0 bg-bgPrimary rounded-lg text-white font-semibold text-xl hover:bg-[#4B2E24]"
                ></input>
              </div>
            </form>
            <div className="text-center my-4 space-y-5">
              <p>Or Sign In With</p>
              <div className="flex items-center justify-center gap-5 text-xl">
                <button className="p-4 text-bgPrimary bg-gray-200 rounded-full hover:bg-bgPrimary hover:text-[#5483e9] duration-300">
                  <FaFacebookF />
                </button>
                <button className="p-4 text-bgPrimary bg-gray-200 rounded-full hover:bg-bgPrimary hover:text-[#064686] duration-300">
                  <FaLinkedinIn />
                </button>
                <button
                  className="p-4 text-bgPrimary bg-gray-200 rounded-full hover:bg-bgPrimary hover:text-[#f12121] duration-300"
                  onClick={handleGoogleSignIn}
                >
                  <FaGoogle />
                </button>
              </div>
            </div>
            <p className="text-center text-lg ">
              New to Bistro Boss?{" "}
              <Link
                to="/register"
                className="text-primaryOrange font-semibold hover:text-primary duration-300"
              >
                Register
              </Link>
            </p>
          </div>
          {/* Form End */}
        </div>
      </div>
    </>
  );
};

export default Login;
