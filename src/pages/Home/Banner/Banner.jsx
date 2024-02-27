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
    <Carousel>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
