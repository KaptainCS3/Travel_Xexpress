import React from 'react'

const CommentList = () => {
  return (
    <div className="flex">
      <div className="mr-4 mt-2">
        <img
          src="/assets/user.jpg"
          alt="John Doe"
          className="w-12 h-auto"
        />
      </div>
      <div className="w-[93%]">
        <span>
          <span className="hover:underline text-[#7AB730] cursor-pointer pr-1">
            John Doe{" "}
          </span>
          <span className="italic text-[0.8rem]">01 Jan 2045</span>
        </span>
        <p className="text-[#656565] pb-3">
          Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
          tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
          dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
          sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
        </p>
        <div>
          <button className="border border-[#7AB730] text-[0.8rem] px-2 py-[0.25rem] text-[#7AB730] hover:bg-[#7AB730] hover:text-white">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentList