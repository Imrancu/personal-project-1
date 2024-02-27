import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-4 my-20">
      <div className="content-above-overlay ">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"Featured Item"}
        ></SectionTitle>
        <div className="md:flex gap-16 max-w-screen-xl mx-auto justify-center items-center py-16">
          <div>
            <img className="rounded-xl" src={featured} alt="" />
          </div>
          <div className="md:ml-10">
            <p className="text-xl text-orange-500 font-bold">Aug 20, 2024</p>
            <p className="text-3xl font-semibold my-2">Where can I get Some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              debitis, nobis, tempora ex quam culpa molestias rerum adipisci
              velit, explicabo enim? Iure et quaerat tempore consequuntur, quod
              iste natus quasi ullam placeat illum est debitis deleniti corporis
              praesentium maxime voluptatum recusandae, ea quo voluptate
              molestias cum vel maiores tempora. Reprehenderit?
            </p>
            <button className="btn btn-outline border-0 border-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase text-orange-600  mt-5">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
