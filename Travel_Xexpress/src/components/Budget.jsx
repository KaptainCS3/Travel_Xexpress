import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faAward,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const Budget = () => {
  const faM = faMoneyCheckAlt;
  const faA = faAward;
  const faG = faGlobe;
  const budget = [
    {
      id: 1,
      src: faM,
      title: "Competitive Pricing",
      description:
        "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea",
    },
    {
      id: 2,
      src: faA,
      title: "Best Services",
      description:
        "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea",
    },
    {
      id: 3,
      src: faG,
      title: "Worldwide Coverage",
      description:
        "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea",
    },
  ];
  return (
    <>
      <section className="m-8 py-8 md:flex lg:flex lg:justify-between lg:w-[82.5%] mx-auto md:mx-12">
        {budget.map((items) => {
          return (
            <div className="flex mb-5 justify-between lg:w-[32%] sm:mx-8">
              <div className="w-[100px] h-[100px] px-[2.5rem] py-8 mr-4 bg-[#7AB730] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={items.src}
                  className="text-[2rem] text-white"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{items.title}</h3>
                <p className="text-[#656565] text-[1rem] text-left font-normal font line_h">
                  {items.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Budget;
