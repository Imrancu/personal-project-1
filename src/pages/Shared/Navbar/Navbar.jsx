import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from '../../../assets/logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <div className="flex justify-center items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">Our Menu</Link>
      </li>
      <li>
        <Link to="order/salad">Order Food</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-xs border-none bg-orange-600">
            <FaCartShopping className=""></FaCartShopping>
            <div className="badge bg-white">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </div>
  );
  return (
    <div className="">
      <div className="navbar bg-black fixed inset-x-0 px-10 bg-opacity-70 z-40 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="w-24">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn btn-sm btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase">
              <Link onClick={handleLogOut}>Logout</Link>
            </button>
          ) : (
            <button className="btn btn-sm btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase">
              <Link to="login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
