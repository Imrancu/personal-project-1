import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHotjar } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";




const BestServices = () => {
  const services = [
    {
      name: "Serve",
      icon: <MdMiscellaneousServices className="flex mx-auto" />,
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    },
    {
      name: "Fresh Food",
      icon: <IoFastFoodOutline className="flex mx-auto" />,
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    },
    {
      name: "Hot Food",
      icon: <FaHotjar  className="flex mx-auto" />,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    },
    {
      name: "Coffee",
      icon: <FaCoffee  className="flex mx-auto" />,
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
  ];
  return (
    <div
      className="hero my-24"
      data-aos="fade-down-right"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="text-center w-full text-white max-w-screen-xl mx-auto">
        <SectionTitle
          heading="Best Services"
          subHeading="Choose Your Best One"
        ></SectionTitle>
        <div className="flex">
            <div className="gap-6 grid lg:grid-cols-4 md:grid-cols-3 my-12 sm:grid-cols-2">
          {services.map((service, index) => (
            <div className="bg-orange-100 text-gray-600 p-10 rounded-lg hover:bg-transparent hover:text-white hover:border transition duration-300" data-aos="zoom-in" data-aos-duration="2000" key={index}>
                <h2 className="text-3xl font-semibold mb-5">{service.name}</h2>
                <small className="text-5xl">{service.icon}</small>
                <p className="mt-5">{service.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
