import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Menu"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button className="btn btn-outline border-0 border-b-2 uppercase mt-5">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
