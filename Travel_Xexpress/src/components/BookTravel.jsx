import React from 'react'

const BookTravel = () => {
  return (
    <>
      <section className="border mx-8 mt-12 shadow-2xl py-8 mb-16 bg-white">
        <form className="px-8">
          <div className="">
            <select className="w-full py-3 mb-4 border">
              <option>Destion 1</option>
              <option>Destion 2</option>
              <option>Destion 3</option>
              <option>Destion 4</option>
            </select>
          </div>
          <div>
            <input
              className="w-full py-3 border mb-4 px-4 outline-none"
              placeholder="Depart Date"
            />
          </div>
          <div>
            <input
              className="w-full py-3 border mb-4 px-4 outline-none"
              placeholder="Return Date"
            />
          </div>
          <div>
            <select className="w-full py-3 border">
              <option>Duration 1</option>
              <option>Duration 2</option>
              <option>Duration 3</option>
              <option>Duration 4</option>
            </select>
          </div>
          <button className="w-full py-3 border mt-4 text-white bg-[#7AB730]">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default BookTravel