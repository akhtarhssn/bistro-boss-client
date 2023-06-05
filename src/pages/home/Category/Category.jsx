import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
const Category = () => {
  return (
    <section className="my-24 text-center">
      <SectionHeader
        title={"Order Online"}
        subTitle={"From 11:00am to 10:00pm"}
      ></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white "
      >
        <SwiperSlide>
          <img
            className="rounded-md h-full w-full "
            src={slide1}
            alt="Slide 1 Image"
          />
          <h4 className="text-3xl font-semibold uppercase -translate-y-20">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-full w-full "
            src={slide2}
            alt="Slide 1 Image"
          />
          <h4 className="text-3xl font-semibold uppercase -translate-y-20">
            Pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-full w-full "
            src={slide3}
            alt="Slide 1 Image"
          />
          <h4 className="text-3xl font-semibold uppercase -translate-y-20">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-full w-full "
            src={slide4}
            alt="Slide 1 Image"
          />
          <h4 className="text-3xl font-semibold uppercase -translate-y-20 shadow-black drop-shadow2xl">
            Deserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-full w-full "
            src={slide5}
            alt="Slide 1 Image"
          />
          <h4 className="text-3xl font-semibold uppercase -translate-y-20">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
