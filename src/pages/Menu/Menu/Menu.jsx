import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import drinksBg from "../../../assets/menu/dessert-bg.jpeg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const popular = menu.filter((item) => item.category === "popular");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      {/* Page Cover */}
      <Cover
        img={menuBg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      />
      <div className="my-20">
        {/* Offered Items */}
        <SectionHeader subTitle={"Don't Miss"} title={"today's offer"} />
        <MenuCategory items={offered} title="offered" />
        {/* Salads Items */}
        <MenuCategory
          items={salads}
          title="salad"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={saladBg}
        />
        {/* Deserts Items */}
        <MenuCategory
          items={desserts}
          title="dessert"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={desertBg}
        />
        {/* Soups Items */}
        <MenuCategory
          items={soups}
          title="soup"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={soupBg}
        />
        {/* Drinks Items */}
        <MenuCategory
          items={drinks}
          title="drink"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={drinksBg}
        />
        {/* Popular Items */}
        <MenuCategory
          items={popular}
          title="popular"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={drinksBg}
        />
        {/* Pizzas Items */}
        <MenuCategory
          items={pizzas}
          title="pizza"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={pizzaBg}
        />
      </div>
    </div>
  );
};

export default Menu;
