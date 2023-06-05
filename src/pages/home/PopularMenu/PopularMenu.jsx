import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  return (
    <section className="p-5 lg:p-0 my-20">
      <SectionHeader title="from our menu" subTitle="Check it Out" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
