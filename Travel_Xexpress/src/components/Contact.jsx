import React from "react";

const Contact = () => {
  return (
    <>
      <section className="m-8 py-8 md:w-[65%] lg:w-[65%] mx-auto">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-4">
            CONTACT
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Contact For Any Query
          </h2>
          <div className="sm:w-full sm:px-8 lg:w-full md:w-full">
            {/* bg-[#fff] px-8 py-8 sm:w-full md:w-[85%] md:flex md:flex-col lg:w-[85%] lg:flex lg:flex-col */}
            <form className="bg-[#fff] px-8 py-8 sm:w-full">
              <div className="md:flex md:justify-between lg:flex lg:justify-between">
                <div className="md:w-[48%] lg:w-[48%]">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full py-3 border mb-4 px-4 outline-none form_focus"
                  />
                </div>
                <div className="md:w-[48%] lg:w-[48%]">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full py-3 border mb-4 px-4 outline-none form_focus"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-3 border mb-4 px-4 outline-none form_focus"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full py-3 border mb-4 px-4 outline-none form_focus"
                />
              </div>
              <div className="mx-auto flex justify-center">
                <button className="w-1/2 py-3 border mt-4 text-white bg-[#7AB730] lg:px-6 hover:bg-[#5F8F25] md:w-1/2 lg:py-4 lg:mt-0 lg:w-1/4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
