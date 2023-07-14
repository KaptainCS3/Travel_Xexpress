import React from "react";
import Aside from "../components/Aside";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
const BlogDetail = () => {
  return (
    <div>
      <section className="m-8 mt-0 py-8 lg:w-[82.5%] mx-auto md:w-[90.5%] md:mx-auto">
        <div className="mt-48 flex flex-row lg:justify-between md:flex-col md:justify-between sm:flex-col">
          <div className="lg:w-[70%] md:w-full md:px-8 sm:w-full sm:px-8">
            <div className="flex w-full md:w-full md:justify-between sm:flex-col">
              <div className="w-full md:w-[100%] sm:w-full">
                <div className="md:flex md:flex-wrap md:justify-between lg:flex lg:flex-wrap lg:justify-between lg:mt-4">
                  <div className="mb-8 flex w-full flex-col bg-white srv transition-all duration-500 delay-0 ease-linear relative md:w-full lg:w-[95%]">
                    <div className="px-4 py-[0.25rem] absolute left-0 top-0 mt-8 -ml-4 bg-[#7AB730] flex flex-col items-center justify-around after:absolute after:top-0 after:left-0 after:-mt-4 after:border-t-transparent after:border-l-transparent after:border-b-[#5f8f25] after:border-r-[#5f8f25] after:border-8">
                      <h6 className="text-[0.9rem] font-bold">01</h6>
                      <small className="uppercase text-sm text-white -mt-[0.25rem]">
                        jan
                      </small>
                    </div>
                    <div className="transition-all duration-500 delay-0 ease-linear w-full">
                      <img
                        src="../../public/assets/blog-1.jpg"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="my-5 px-6">
                      <h3 className="text-[#7AB730]">
                        <span className="hover:text-[#5F8F25]">ADMIN</span>{" "}
                        <span>|</span>{" "}
                        <span className="hover:text-[#5F8F25]">
                          TOURS & TRAVEL
                        </span>
                      </h3>
                      <h2 className="text-[#212121] text-[2.1rem] font-bold mb-4">
                        Dolor justo sea kasd lorem clita justo diam amet
                      </h2>
                      <p className="text-[1.04rem] text-[#656565] pb-3">
                        Sadipscing labore amet rebum est et justo gubergren. Et
                        eirmod ipsum sit diam ut magna lorem. Nonumy vero labore
                        lorem sanctus rebum et lorem magna kasd, stet amet magna
                        accusam consetetur eirmod. Kasd accusam sit ipsum
                        sadipscing et at at sanctus et. Ipsum sit gubergren
                        dolores et, consetetur justo invidunt at et aliquyam ut
                        et vero clita. Diam sea sea no sed dolores diam nonumy,
                        gubergren sit stet no diam kasd vero.
                      </p>
                      <p className="text-[1.04rem] text-[#656565] pb-3">
                        Voluptua est takimata stet invidunt sed rebum nonumy
                        stet, clita aliquyam dolores vero stet consetetur elitr
                        takimata rebum sanctus. Sit sed accusam stet sit nonumy
                        kasd diam dolores, sanctus lorem kasd duo dolor dolor
                        vero sit et. Labore ipsum duo sanctus amet eos et.
                        Consetetur no sed et aliquyam ipsum justo et, clita
                        lorem sit vero amet amet est dolor elitr, stet et no
                        diam sit. Dolor erat justo dolore sit invidunt.
                      </p>
                      <h3 className="text-[#212121] text-[1.8rem] font-bold mb-4">
                        Est dolor lorem et ea
                      </h3>
                      <img
                        src="../../public/assets/blog-2.jpg"
                        alt=""
                        className="w-1/2 mr-5 float-left"
                      />
                      <p className="text-[1.04rem] text-[#656565] pb-3">
                        Diam dolor est labore duo invidunt ipsum clita et, sed
                        et lorem voluptua tempor invidunt at est sanctus
                        sanctus. Clita dolores sit kasd diam takimata justo diam
                        lorem sed. Magna amet sed rebum eos. Clita no magna no
                        dolor erat diam tempor rebum consetetur, sanctus labore
                        sed nonumy diam lorem amet eirmod. No at tempor sea diam
                        kasd, takimata ea nonumy elitr sadipscing gubergren
                        erat. Gubergren at lorem invidunt sadipscing rebum sit
                        amet ut ut, voluptua diam dolores at sadipscing stet.
                        Clita dolor amet dolor ipsum vero ea ea eos. Invidunt
                        sed diam dolores takimata dolor dolore dolore sit. Sit
                        ipsum erat amet lorem et, magna sea at sed et eos.
                        Accusam eirmod kasd lorem clita sanctus ut consetetur
                        et. Et duo tempor sea kasd clita ipsum et.
                      </p>
                      <h3 className="text-[#212121] text-[1.1rem] mb-4">
                        Est dolor lorem et ea
                      </h3>
                      <img
                        src="../../public/assets/blog-3.jpg"
                        alt=""
                        className="w-1/2 ml-5 float-right"
                      />
                      <p className="text-[1.04rem] text-[#656565] pb-3">
                        Diam dolor est labore duo invidunt ipsum clita et, sed
                        et lorem voluptua tempor invidunt at est sanctus
                        sanctus. Clita dolores sit kasd diam takimata justo diam
                        lorem sed. Magna amet sed rebum eos. Clita no magna no
                        dolor erat diam tempor rebum consetetur, sanctus labore
                        sed nonumy diam lorem amet eirmod. No at tempor sea diam
                        kasd, takimata ea nonumy elitr sadipscing gubergren
                        erat. Gubergren at lorem invidunt sadipscing rebum sit
                        amet ut ut, voluptua diam dolores at sadipscing stet.
                        Clita dolor amet dolor ipsum vero ea ea eos. Invidunt
                        sed diam dolores takimata dolor dolore dolore sit. Sit
                        ipsum erat amet lorem et, magna sea at sed et eos.
                        Accusam eirmod kasd lorem clita sanctus ut consetetur
                        et. Et duo tempor sea kasd clita ipsum et. Takimata kasd
                        diam justo est eos erat aliquyam et ut.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full flex-col bg-white srv transition-all duration-500 delay-0 ease-linear relative md:w-full lg:w-[95%]">
                    <div className="p-8">
                      <h3 className="text-[#212121] text-[1.8rem] font-bold mb-4 uppercase tracking-[0.4rem] line-h">
                        3 comments
                      </h3>
                      <Comment />
                      <Comment />
                      <div className="ml-16">
                        <Comment />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full flex-col bg-white srv transition-all duration-500 delay-0 ease-linear relative md:w-full lg:w-[95%]">
                    <div className="p-8">
                      <h3 className="text-[#212121] text-[1.8rem] font-bold mb-4 uppercase tracking-[0.4rem] line-h">
                        leave a comment
                      </h3>
                      <CommentForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Aside />
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
