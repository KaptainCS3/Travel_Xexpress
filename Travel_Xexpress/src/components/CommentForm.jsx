import React from "react";

const CommentForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name" className="py-2 inline-block">Name *</label>
        <input
          id="name"
          type="text"
          placeholder=""
          className="w-full py-3 border mb-4 px-4 outline-none form_focus"
        />
      </div>
      <div>
        <label htmlFor="email" className="py-2 inline-block">Email *</label>
        <input
          id="email"
          type="email"
          placeholder=""
          className="w-full py-3 border mb-4 px-4 outline-none form_focus"
        />
      </div>
      <div>
        <label htmlFor="website" className="py-2 inline-block">Website</label>
        <input
          id="website"
          type="text"
          placeholder=""
          className="w-full py-3 border mb-4 px-4 outline-none form_focus"
        />
      </div>
      <div>
        <label htmlFor="message" className="py-2 inline-block">Message *</label>
        <textarea
          id="message"
          rows="5"
          className="w-full py-3 border mb-4 px-4 outline-none form_focus"
        />
      </div>
      <div className="mx-auto flex justify-start">
        <button className="w-1/2 py-3 border mt-4 text-white bg-[#7AB730] lg:px-2 font-bold hover:bg-[#5F8F25] md:w-1/2 lg:py-4 lg:mt-0 lg:w-1/4">
          Leave a comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
