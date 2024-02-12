import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert').slice(0, 6)
    const soup = menu.filter(item => item.category === 'soup').slice(0, 6)
    const salad = menu.filter(item => item.category === 'salad').slice(0, 6)
    const pizza = menu.filter(item => item.category === 'pizza').slice(0, 6)
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover  */}
      <Cover title={"Our menu"} image={menuImage}></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory
      img={saladImage}
      title="offered"
      items={offered}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory
      img={dessertImage}
      title="dessert"
      items={desserts}></MenuCategory>
      <MenuCategory
      img={pizzaImage}
      title="pizza"
      items={pizza}></MenuCategory>
      <MenuCategory
      img={saladImage}
      title="salad"
      items={salad}></MenuCategory>
      <MenuCategory
      img={soupImage}
      title="soup"
      items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
