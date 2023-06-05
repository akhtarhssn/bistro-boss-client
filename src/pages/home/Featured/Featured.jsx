import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-20 featured-image bg-fixed">
      <div className="bg-black py-20 bg-opacity-60 text-white">
        <div className="md:max-w-7xl mx-auto container">
          <SectionHeader title="Featured Item" subTitle="Check it Out" />
          <div className="md:flex gap-10 justify-center items-center">
            <img src={featuredImg} alt="" className="h-[400px] rounded-lg" />
            <div className="space-y-3">
              <p>May 28, 2023</p>
              <p className="uppercase">Where Can I get some</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <div>
                <button className="btn btn-outline uppercase border-2 border-white text-white">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
