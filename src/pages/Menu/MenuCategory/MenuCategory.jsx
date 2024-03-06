import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8 mb-12">
      {title && <Cover title={title} image={img}></Cover>}
      <div className="grid grid-cols-2 gap-10 mt-16 max-w-screen-xl mx-auto">
        {items.map((item) => (
          <MenuItems  key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase mt-5">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
