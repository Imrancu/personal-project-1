import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <p className="py-6">
            Steak In was the first retaurant to open in Egypt, the resturant was
            designed with the history in mind we have created a soft industrial
            dining room, combined with an open kitchen, coffee take out bar and
            on site coffee roastery.
          </p>
          <div className="flex">
            <div>
              <h4 className="text-xl font-semibold">Our Address</h4>
              <p className="my-3">
                Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.
              </p>
              <h5 className="text-xl font-semibold text-orange-500 mb-3">
                GET DIRECTIONS
              </h5>
              <h4 className="text-xl font-semibold">Our Email</h4>
              <p className="my-3">
                Main Email : 7oroof@7oroof.com <br />
                Inquiries : Info@7oroof.com
              </p>
              <h5 className="text-xl font-semibold text-orange-500">SEND A MESSAGE</h5>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Our Phones</h4>
              <p className="my-3">
              Office Telephone : 002 01065370701 <br />Mobile : 002 01065370701
              </p>
              <h5 className="text-xl font-semibold text-orange-500 mb-3">
                Call Us
              </h5>
              <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
              <div className="flex text-5xl gap-4 text-white">
                <FaFacebook className="bg-orange-600 p-2 rounded-lg cursor-pointer"></FaFacebook>
                <FaLinkedin className="bg-orange-600 p-2 rounded-lg cursor-pointer"></FaLinkedin>
                <FaTwitter className="bg-orange-600 p-2 rounded-lg cursor-pointer"></FaTwitter>
                <FaInstagram className="bg-orange-600 p-2 rounded-lg cursor-pointer"></FaInstagram>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-1/2 border border-orange-600 bg-orange-50" data-aos="fade-left" data-aos-duration="1000">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                 
                  type="text"
                  placeholder="Write you message"
                  className="textarea textarea-bordered"
                />

              </div>
              
              <div className="form-control my-3">
                <input
                  type="submit"
                  value="Send Your Message"
                  className="btn w-full bg-orange-600 hover:bg-orange-500 text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ContactSection;
