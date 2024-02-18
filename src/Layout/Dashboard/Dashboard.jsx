import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaHouseMedical,
  FaList,
  FaRankingStar,
  FaShop,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // Todo: Get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouseMedical />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHouseMedical />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping />
                  My Cart {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaRankingStar />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList />
                  Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* Shared Common Nav Links below */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHouseMedical />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShop />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
