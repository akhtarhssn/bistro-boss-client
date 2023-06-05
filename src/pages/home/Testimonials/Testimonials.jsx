import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistor-boss-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionHeader subTitle="What Our Client Say" title="Testimonials" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="text-center px-20 py-5">
              <div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={3}
                  readOnly
                  className="mx-auto"
                />
                <div className="flex justify-center my-10 text-8xl">
                  <FaQuoteLeft />
                </div>
                <p className="mt-10 mb-5">{review.details}</p>
                <h3 className="text-3xl font-semibold text-amber-400">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
