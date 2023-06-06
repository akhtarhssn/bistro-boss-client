import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, subTitle, coverImg }) => {
  return (
    <div className="my-20 p-5 md:p-5 xl:p-0">
      {coverImg && <Cover img={coverImg} title={title} subTitle={subTitle} />}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl container mx-auto my-10 divide-y divide-gray-500 md:divide-y-0">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-4">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
