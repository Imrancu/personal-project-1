import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto mb-24"  data-aos="fade-right" data-aos-duration="2000">
        <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
        >
        </SectionTitle>
      <Swiper
         slidesPerView={3}
         spaceBetween={50}
         freeMode={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay, FreeMode]}
         className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
