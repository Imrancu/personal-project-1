import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping, FaHouseMedical, FaList, FaRankingStar, FaShop } from "react-icons/fa6";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome"><FaHouseMedical />User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart"><FaCartShopping />My Cart {cart.length}</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review"><FaRankingStar />Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings"><FaList />My Booking</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/"><FaHouseMedical />Home</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"><FaShop />Menu</NavLink>
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
