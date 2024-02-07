import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-4 my-20">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-700 bg-opacity-50 items-center py-20 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="text-xl text-yellow-500 font-bold">Aug 20, 2024</p>
          <p className="text-3xl font-semibold my-2">Where can I get Some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            debitis, nobis, tempora ex quam culpa molestias rerum adipisci
            velit, explicabo enim? Iure et quaerat tempore consequuntur, quod
            iste natus quasi ullam placeat illum est debitis deleniti corporis
            praesentium maxime voluptatum recusandae, ea quo voluptate molestias
            cum vel maiores tempora. Reprehenderit?
          </p>
          <button className="btn btn-outline border-0 border-b-2 text-xl uppercase text-white mt-5">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
