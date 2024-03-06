import { Parallax } from "react-parallax";

const Cover = ({ image, title }) => {
  return (
    <Parallax
      blur={{ min: -40, max: 40 }}
      bgImage={image}
      bgImageAlt="the food"
      strength={-200}
    >
      <div
        className="hero h-[450px]"
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div className="w-1/2 hero-overlay bg-opacity-70 px-16 py-6" data-aos="zoom-in" data-aos-duration="2000">
            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
