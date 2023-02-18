import React from "react";

const creationData = [
  {
    id: 1,
    imgSrc: "./assets/creation/creation-1.svg",
  },
  {
    id: 2,
    imgSrc: "./assets/creation/creation-2.svg",
  },
  {
    id: 3,
    imgSrc: "./assets/creation/creation-3.svg",
  },
];
const Creation = () => {
  return (
    <section className="creation__section text-center py-5 my-5">
      <div className="container mx-auto px-2">
        <div className="creation__inner mb-8">
          <div className="creation__inner-top">
            <h2 className="header-title    text-main-color font-semibold mb-3 md:mb-5 text-3xl  md:text-4xl lg:text-6xl ">
              Best Creations
            </h2>
            <p className="text-base  text-text-color  md:text-xl lg:text-2xl">
              Here are some best people have created
            </p>
          </div>
          <div className="creation__inner-bottom mt-8 md:mt-14 flex justify-between flex-wrap gap-3">
            {creationData.map(({ id, imgSrc }) => (
              <div className="single__card mx-auto my-4 " key={id}>
                <div className="single__card-imgContainer ">
                  <img
                    src={imgSrc}
                    alt={`creation-${id}`}
                    className="rounded-lg rounded-b-none"
                  />
                </div>
                <div className="single__card-info  bg-main-color py-2 px-6  rounded-lg rounded-t-none">
                  <span className="text-xs text-text-color">Created By</span>
                  <h2 className="text-base font-semibold text-text-color">
                    Mr. Jonny
                  </h2>
                  <p className="font-semibold text-text-color text-left text-sm md:text-base">
                    prompt: describe your prompt here...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <span className="text-black text-sm"> Loved It? Create yours</span>
          <button className="block bg-main-color h-9 mx-auto mt-4 w-[140px]  md:w-[170px] lg:w-[237px] text-text-color text-base font-semibold rounded-3xl">
            Log in{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Creation;
