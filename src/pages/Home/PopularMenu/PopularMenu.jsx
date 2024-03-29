import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  return (
    <section className="mb-12 max-w-screen-xl mx-auto mt-32"  data-aos="fade-up" data-aos-duration="1000">
      <SectionTitle
        subHeading={"Popular Menu"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-24">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex flex-col items-center mb-32 mt-10">
        <button className="btn btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase mt-5">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
