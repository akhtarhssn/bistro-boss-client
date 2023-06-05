import { Helmet } from "react-helmet-async";
import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-7xl container mx-auto">
        <Category />
        <BistroBoss />
        <PopularMenu />
        <CallUs />
        <ChefRecommends />
      </div>
      <Featured />
      <div className="max-w-7xl container mx-auto">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
