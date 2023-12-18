import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { user, handleLogout } = useAuth();
  const navMenuList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {user && cart.length > 0 && (
        <li className="text-center">
          <Link to="/dashboard/my-cart">
            <FiShoppingCart className="text-3xl relative" />
            <span className="bg-red-500 absolute -right-1 top-1 py-1 px-2 rounded-full text-sm font-medium text-white">
              <p>{cart.length}</p>
            </span>
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}>
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div
      className={`navbar fixed z-10 ${
        scrolling
          ? "bg-white text-black border-b border-b-gray-200"
          : "bg-black bg-opacity-40 text-white"
      }`}
    >
      <div className="max-w-7xl container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navMenuList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenuList}</ul>
        </div>
        <div className="navbar-end flex justify-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 text-black rounded-box w-52"
              >
                <p>
                  <small>Hello! </small>
                  {user?.displayName}
                </p>
                <li>
                  <Link to="/dashboard/user-home" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li onClick={handleLogout}>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
