import React from "react";
import backgroundImg from "../assets/background.png";

const Middle = () => {
  return (
    <div
      class="flex bg-cover bg-no-repeat p-20"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div class="max-w-sm p-6 mx-20 mt-10">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          type="button"
          class="text-white bg-brightGreen hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-brightGreen font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-brightGreen dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Lorem Ipsum
        </button>
      </div>

      <div class="max-w-sm p-6 mt-10">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};
export default Middle;
