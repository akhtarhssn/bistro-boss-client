import { Link, NavLink, Outlet } from "react-router-dom";
import { FiCalendar, FiHome } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { HiOutlineBars4 } from "react-icons/hi2";
import { BsBagCheck, BsCartCheck, BsWallet2 } from "react-icons/bs";
import { MdOutlineContactSupport, MdOutlineRateReview } from "react-icons/md";
import { FaBars, FaUsers } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:py-10 py-5">
          {/* Page content here */}
          <div className="px-5">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <HiOutlineBars4 />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu text-black p-4 w-80 h-full bg-[#D1A054]">
            <div className="uppercase px-4 py-0 mb-14">
              <Link to="/dashboard">
                <h4 className="text-2xl font-bold">Bistro Boss</h4>
                <p className="tracking-[.38em]">Restaurant</p>
              </Link>
            </div>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin-home">
                    {" "}
                    <FiHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-item">
                    <ImSpoonKnife /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-items">
                    {" "}
                    <AiOutlineBars /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-bookings">
                    <BiNotepad />
                    Manage Bookings
                  </NavLink>
                </li>
                {cart.length > 0 && (
                  <li>
                    <NavLink to="/dashboard/my-cart">
                      <BsCartCheck />
                      My Cart
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/dashboard/all-users">
                    {" "}
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/user-home">
                    {" "}
                    <FiHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FiCalendar /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    {" "}
                    <BsWallet2 /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-cart">
                    <BsCartCheck />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-review">
                    {" "}
                    <MdOutlineRateReview /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-order  ">
                    <BsBagCheck /> My Order
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <BsBagCheck /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <MdOutlineContactSupport /> Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
