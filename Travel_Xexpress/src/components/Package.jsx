import React from "react";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Package = () => {
  const faC = faCalendarAlt;
  const faM = faMapMarkerAlt;
  const faU = faUser;
  const faS = faStar;
  const travelPackage = [
    {
      id: 1,
      src: "/assets/package-1.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
    {
      id: 2,
      src: "/assets/package-2.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
    {
      id: 3,
      src: "/assets/package-3.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
    {
      id: 4,
      src: "/assets/package-4.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
    {
      id: 5,
      src: "/assets/package-5.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
    {
      id: 6,
      src: "/assets/package-6.jpg",
      calendar: faC,
      location: faM,
      user: faU,
      star: faS,
      title: "Travel Guide",
      description: "Discover amazing places of the world with us",
      numBook: "2 Person",
      place: "Thailand",
      numDay: "3 days",
      price: "$350",
      rate: "4.5",
      point: "(250)",
    },
  ];

  return (
    <div>
      <section className="m-8 py-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-2">
            SERVICES
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Tours & Travel Services
          </h2>
          <div className="cursor-pointer">
            {travelPackage.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-8 flex w-full flex-col justify-center items-center hover:shadow-2xl bg-white srv transition-all duration-500 delay-0 ease-linear"
                >
                  <div className="transition-all duration-500 delay-0 ease-linear">
                    <img src={item.src} alt="" className="h-full" />
                  </div>
                  <div className="my-5 px-5">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={item.location}
                          className="mr-2 text-[#7AB730]"
                        />
                        <small className="text-[#656565]">{item.place}</small>
                      </div>
                      <div className="flex items-center justify-center">
                        {" "}
                        <FontAwesomeIcon
                          icon={item.calendar}
                          className="mr-2 text-[#7AB730]"
                        />
                        <small className="text-[#656565]">{item.numDay}</small>
                      </div>
                      <div className="flex items-center justify-center">
                        {" "}
                        <FontAwesomeIcon
                          icon={item.user}
                          className="mr-2 text-[#7AB730]"
                        />
                        <small className="text-[#656565]">{item.numBook}</small>
                      </div>
                    </div>
                    <h3 className="text-[#212121] text-xl font-medium mb-4 hover:text-[#5F8F25]">
                      {item.description}
                    </h3>
                    <div className="flex justify-between border-t-[0.05rem] pt-4">
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={item.star}
                          className="mr-2 text-[#7AB730]"
                        />
                        <p className="font-medium text-[#212121] mr-2">
                          {item.rate}
                        </p>
                        <small className="">{item.point}</small>
                      </div>
                      <h5 className="text-xl text-[#212121] font-medium">
                        {item.price}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Package;
