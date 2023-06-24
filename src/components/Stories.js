import React from "react";
import CardImage from "../assets/card_image.png";

const Stories = () => {
  return (
    <>
      <div className="text-customBlue text-4xl font-bold mb-8 ml-24 mt-12">
        <span>LATEST STORIES AND</span>
        <br></br>
        <span> UPDATES</span>
        <br></br>

        <span className="inline-block h-2 w-1/6 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
      </div>
      <div class="flex justify-center  gap-6 mb-8">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-customBlue dark:border-gray-700">
          <div>
            <a href="#">
              <img class="rounded-t-lg w-full" src={CardImage} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Blandit dolor eu enim ac nisl enim sed diam.
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Fames elementum scelerisque lectus sit id. Maecenas porttitor
                nunc adipiscing gravida tincidunt sed aliquet condimentum leo.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-customBlue dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-full" src={CardImage} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Blandit dolor eu enim ac nisl enim sed diam.
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc
              adipiscing gravida tincidunt sed aliquet condimentum leo.
            </p>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-customBlue dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-full" src={CardImage} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Blandit dolor eu enim ac nisl enim sed diam.
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc
              adipiscing gravida tincidunt sed aliquet condimentum leo.
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="flex text-customBlue bg-brightGreen focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-auto dark:bg-brightGreen mb-20"
      >
        Lorem Ipsum
      </button>
    </>
  );
};

export default Stories;
