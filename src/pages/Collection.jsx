import React from "react";
import sofaCollection from "../assets/collection/sofa-collection-banner.jpg";

const Collection = () => {
  return (
    <div
      className=" container mx-auto flex h-[600px] mt-32 mb-6 "
      style={{ backgroundImage: `url(${sofaCollection})` }}
    >
      <div className=" flex flex-col ml-[300px] lg:w-2/3 bg-inherit fill-transparent items-start justify-center bg-slate-300 bg-opacity-20">
        <h1 className="text-white text-3xl font-bold my-6">
          Unlimited Sofa Collection
        </h1>
        <p className="text-white font-bold pr-22 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiuiana smod tempor<br></br> ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation <br></br>ullamco laboris
          nisi ut aliquip.
        </p>
        <p className="py-6 font-bold text-white">
          {" "}
          Starting From <span className="text-yellow-900">$399.00</span>
        </p>
        <div>
          <button
            className="px-6 py-4 bg-yellow-500 text-white font-bold hover:border-2
                     hover:border-yellow-500 hover:text-yellow-500 hover:bg-slate-50 "
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
