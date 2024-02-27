import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-pink-kappa.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-10 max-w-screen-xl mx-auto">
      <SectionTitle
        subHeading={"What Our Client Say!"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 flex flex-col text-center items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="my-5">{review.details}</p>
              <h3 className="text-2xl text-orange-500 uppercase">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
