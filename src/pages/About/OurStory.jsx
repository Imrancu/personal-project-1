

const OurStory = () => {
    return (
        <div
      className="hero bg-contain my-24"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/street-cafe-sketch_1284-4167.jpg?t=st=1709657778~exp=1709661378~hmac=7236c50348054e87d4f13a7a80857fa8b06aa1b1d46b211fe9c69ab613c7421c&w=740)",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-xl bg-gray-800 p-2 rounded-lg" data-aos="zoom-in-up">
          <div className=" text-white border border-white p-4 rounded-lg" >
            <h2 className="text-4xl mb-8 mt-5 italic">Our Story</h2>
            <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            <div className="flex gap-10 justify-center items-center my-10 ">
                <div>Signature</div>
                <div>
                    <h4 className="text-xl font-semibold">Harry Price</h4>
                    <p>Restaurant Owner</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OurStory;