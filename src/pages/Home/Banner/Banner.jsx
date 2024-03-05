import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.png";
import img2 from "../../../assets/home/02.png";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.png";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const images = [img1, img2, img3, img4, img5, img6];
const Banner = () => {
  return (
    <Carousel
    containerClass="carousel-container" // Add a class to the carousel container for custom styling
      itemClass="carousel-item" // Add a class to the carousel items for custom styling
      responsive={{
        // Configure responsive behavior if needed
        // For example, showing different number of items based on screen size
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      >
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
