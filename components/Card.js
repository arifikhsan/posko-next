import React from "react";

function Card() {
  return (
    <div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <h2 className="text-2xl font-medium text-gray-900 title-font">
              Erupsi Merapi 27 Mei 2010
            </h2>
          </div>
          <div className="flex-grow mt-2">
            <p className="inline-flex items-baseline">
              <span className="text-xl font-semibold">27</span>
              <span className="ml-2">Posko</span>
            </p>
            <p className="inline-flex items-baseline mt-2">
              <span className="text-xl font-semibold text-red-500">20%</span>
              <span className="ml-2">Bantuan terpenuhi</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <h2 className="text-2xl font-medium text-gray-900 title-font">
              Anim tempor ut excepteur non 27 Mei 2010
            </h2>
          </div>
          <div className="flex-grow mt-2">
            <p className="inline-flex items-baseline">
              <span className="text-xl font-semibold">27</span>
              <span className="ml-2">Posko</span>
            </p>
            <p className="inline-flex items-baseline mt-2">
              <span className="text-xl font-semibold text-yellow-500">60%</span>
              <span className="ml-2">Bantuan terpenuhi</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <h2 className="text-2xl font-medium text-gray-900 title-font">
              Sint nulla nulla qui tempor occaecat 27 Mei 2010
            </h2>
          </div>
          <div className="flex-grow mt-2">
            <p className="inline-flex items-baseline">
              <span className="text-xl font-semibold">27</span>
              <span className="ml-2">Posko</span>
            </p>
            <p className="inline-flex items-baseline mt-2">
              <span className="text-xl font-semibold text-green-500">90%</span>
              <span className="ml-2">Bantuan terpenuhi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
