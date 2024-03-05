import party from "../../../assets/home/party.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Party = () => {
  return (
    <div>
      <SectionTitle heading="Book Here" subHeading="Book your suitable schedule"></SectionTitle>

      <div className="hero my-24">
      <div className="hero-content md:max-w-h-xl gap-12 p-0 justify-between flex-col lg:flex-row">
        <div data-aos="zoom-in-left" data-aos-duration="1000" className="bg-orange-50 p-10 border border-orange-600 rounded-lg shadow-lg">
          <h3 className="text-3xl">Book Your Schedule</h3>
          <p className="text-xl my-4">
            We recommend celebrating all moments, big or small, or turning a
            business dinner into a festive feast. At Colletta, you don't need an
            excuse to gather. We recommend celebrating all moments, big or
            small, or turning a business dinner into a festive feast. At
            Colletta, you don't need an excuse to gather.
          </p>
          <button className="btn btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase">
            Book now
          </button>
        </div>
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
        <img data-aos="zoom-in-right" data-aos-duration="1000" src={party} className="max-w-lg rounded-lg" />
      </div>
    </div>
    </div>
  );
};

export default Party;
