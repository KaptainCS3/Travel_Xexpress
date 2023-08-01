import React from "react";

const BookTravel = () => {
  return (
    <>
      <section className="sm:w-full md:w-[82.5%] md:mx-auto lg:w-[82.5%] mx-auto">
        <section className="z-10 border mx-8 mt-12 shadow-2xl py-8 mb-16 bg-white md:mt-16 md:mb-[5.5rem] md:pt-7 md:absolute md:bottom-0 md:w-[82.5%] md:mx-auto md:flex md:justify-center md:items-center lg:pt-7 lg:absolute lg:bottom-0 lg:w-[82.5%] lg:mx-auto lg:flex lg:justify-center lg:items-center">
          <form className="px-8 md:flex md:justify-between md:w-full md:items-center lg:flex lg:justify-between lg:w-full lg:items-center">
            <div className="sm:w-full md:w-[75%] md:flex md:justify-between md:items-center lg:w-[85%] lg:flex lg:justify-between lg:items-center">
              <div className="md:w-[22%] lg:w-[22%]">
                <select className="bg-white w-full py-3 sm:mb-4 border appearance-none px-4 outline-none form_focus md:mb-0 lg:mb-0">
                  <option value="NA">Destination</option>
                  <option value="destination 1">Destination 1</option>
                  <option value="destination 2">Destination 2</option>
                  <option value="destination 3">Destination 3</option>
                  <option value="destination 4">Destination 4</option>
                </select>
              </div>
              <div className="md:w-[22%] lg:w-[22%]">
                <input
                  type="date"
                  className="bg-white w-full py-3 border sm:mb-4 px-4 outline-none form_focus md:mb-0 lg:mb-0"
                  placeholder="Depart Date"
                />
              </div>
              <div className="md:w-[22%] lg:w-[22%]">
                <input
                  type="date"
                  className="bg-white w-full py-3 border sm:mb-4 px-4 outline-none form_focus md:mb-0 lg:mb-0"
                  placeholder="Return Date"
                />
              </div>
              <div className="md:w-[22%] lg:w-[22%]">
                <select className="bg-white w-full py-3 border appearance-none px-4 outline-none form_focus lg:mb-0">
                  <option>Duration 1</option>
                  <option>Duration 2</option>
                  <option>Duration 3</option>
                  <option>Duration 4</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 border mt-4 text-white bg-[#7AB730] hover:bg-[#5F8F25] md:m-0 md:w-[20%] lg:w-[12%] lg:mt-0">
              Submit
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default BookTravel;
