import React from "react";
import budget from "../../budget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faAward,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const Budget = () => {
  return (
    <>
      <section className="m-8 py-8">
        {budget.map((items) => {
          return (
            <div className="flex mb-8 justify-between">
              <div className="p-[3.5rem] mr-4 bg-[#7AB730]">
                <FontAwesomeIcon
                  icon={faAward === items.src ? null : faAward} className="text-3xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{items.title}</h3>
                <p className="text-[#656565] text-[1rem] text-left">
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
