import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faTicketAlt,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
const faR = faRoute;
const faT = faTicketAlt;
const faH = faHotel;
const ServicesCard = () => {
      const tour = [
        {
          id: 1,
          src: faR,
          title: "Travel Guide",
          description:
            "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
        },
        {
          id: 2,
          src: faT,
          title: "Ticket Booking",
          description:
            "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
        },
        {
          id: 3,
          src: faH,
          title: "Hotel Booking",
          description:
            "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
        },
      ];
  return (
    <>
      <section className="cursor-pointer sm:max-w-[500px] md:flex md:flex-wrap md:justify-between md:mx-12 lg:mt-8 lg:flex lg:justify-between lg:w-full">
        {tour.map((item) => {
          return (
            <div
              key={item.id}
              className="px-7 py-[2.5rem] mb-8 flex w-full flex-col justify-center items-center hover:shadow-2xl bg-white srv transition-all duration-500 delay-0 ease-linear md:max-w-[380px] lg:w-[31%]"
            >
              {/* hover:border-transparent hover:bg-[#71AB30] hover:text-white
               */}
              <div className="border-[0.15rem] p-4 border-[#7AB730] text-[#7AB730]  srv_con transition-all duration-500 delay-0 ease-linear">
                <FontAwesomeIcon icon={item.src} className="text-[2.5rem]" />
              </div>
              {/* <div> */}
              <h4 className="text-xl font-medium mt-4">{item.title}</h4>
              <p className="text-md mt-3 text-center text-[#656565]">
                {item.description}
              </p>
              {/* </div> */}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ServicesCard