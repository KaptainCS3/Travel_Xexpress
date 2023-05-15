import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Offer = () => {
  return (
    <>
      <section className="bg_img">
        <div className="m-8 py-16 flex items-center">
          <div>
            <h3 className="tracking-[0.4rem] line-h uppercase text-[#7AB730] mb-2 mt-6">
              mega offer
            </h3>
            <h2 className="font-bold text-[#7AB730] hero mb-8">
              <span>30% OFF</span>
              <span className="text-white"> For Honeymoon</span>
            </h2>
            <p className="text-white text-left">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <div></div>
            <div className="mt-4">
              <p className="text-white mb-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#7AB730] mr-4"
                />
                <span>Labore eos amet dolor amet diam</span>
              </p>
              <p className="text-white mb-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#7AB730] mr-4"
                />
                <span>Etsea et sit dolor amet ipsum</span>
              </p>
              <p className="text-white">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#7AB730] mr-4"
                />
                <span>Diam dolor diam elitripsum vero.</span>
              </p>
            </div>
            <form className="mt-12">
              <h1 className="py-8 text-center bg-[#7AB730] text-white hero">
                Sign Up Now
              </h1>
              <div className="bg-white py-12">
                <div className="mx-12">
                  <input
                    placeholder="Your name"
                    type="text"
                    name="name"
                    className="w-full py-3 mb-4 px-4 outline-none border"
                  />
                </div>
                <div className="mx-12">
                  <input
                    placeholder="Your email"
                    type="email"
                    name="email"
                    className="w-full py-3 mb-4 border px-4 outline-none"
                  />
                </div>
                <div className="mx-12">
                  <select className="w-full py-3 mb-4 border px-3">
                    <option className="text-[#212121]">Select a destination</option>
                    <option className="text-[#212121]">Destion 1</option>
                    <option className="text-[#212121]">Destion 2</option>
                    <option className="text-[#212121]">Destion 3</option>
                    <option className="text-[#212121]">Destion 4</option>
                  </select>
                </div>
                <div className="mx-12">
              <button className="py-3 w-full text-white bg-[#7AB730]">Sign Up Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
