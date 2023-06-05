import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import FoodCard from "../../../components/FoodCard";

const ChefRecommends = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommended = data.filter((item) => item.category === "offered");
        setRecommendedItems(recommended);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionHeader title="chef recommends" subTitle="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:grid-cols-2 p-5 md:p-0">
        {recommendedItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
