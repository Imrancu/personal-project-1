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

// const categoryItems = [
//   "Salad",
//   "Pizza",
//   "Soups",
//   "Desserts",
//   "Drinks",
//   "Offers",
// ];
// const categoryImages = [slide1, slide2, slide3, slide4, slide5, slide1];

const Category = () => {
  const categoryItems = [
    {
      name: "Salad",
      img: slide1,
    },
    {
      name: "Pizza",
      img: slide2,
    },
    {
      name: "Soups",
      img: slide3,
    },
    {
      name: "Desserts",
      img: slide4,
    },
    {
      name: "Drinks",
      img: slide5,
    },
    {
      name: "Offers",
      img: slide1,
    },
  ];
  console.log(categoryItems);
  return (
    <section
      className="max-w-screen-xl mx-auto mt-24"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
         spaceBetween={50}
         freeMode={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay, FreeMode]}
        className="mySwiper my-24"
      >
        {categoryItems.map((catg, index) => (
          <SwiperSlide key={index}>
            <img src={catg.img} alt={catg.name} />
            <h3 className="text-4xl uppercase text-center -mt-16 mr-10 text-white">
              {catg.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
