import React from "react";
import Navbar from "../partials/Navbar";
import mainImage from "../assets/main_image.png";
import Vector from "../assets/Vector.svg";

const Header = () => {
  return (
    <>
      <section
        className="relative bg-center bg-no-repeat bg-gray-700 bg-blend-multiply custom-bg h-1/3"
        style={{ backgroundImage: `url(${mainImage})`, height: "655px" }}
      >
        <Navbar />
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <p className="mb-4 text-4xl font-bold tracking-tight leading-none text-white capitalize">
            LOREM IPSUM DOLOR SIT AMET
          </p>
          <p className="mb-4 text-4xl font-bold tracking-tight leading-none text-white capitalize">
            CONSECTETUR. VOLUTPAT.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-customBlue rounded-lg border border-white hover:bg-brightGreen focus:ring-4 focus:ring-brightGreen"
            >
              Lorem ipsum
            </a>
          </div>
        </div>
      </section>

      <section className="absolute   mx-16 top-[600px]">
        <div>
          <div className=" rounded-lg bg-white shadow-lg">
            <div
              className="h-20"
              style={{ backgroundImage: `url(${Vector})` }}
            ></div>
            <div className="px-20 pb-10 ">
              <h2 className="text-customBlue text-4xl font-bold mt-8">
                ABOUT LOREM IPSUM
              </h2>
              <span className="inline-block h-2 w-1/5 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
              <div className="mb-4 text-customBlack">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum feugiat ultricies vehicula. Integer efficitur, leo
                  ac laoreet hendrerit, ante est sollicitudin nibh, id cursus
                  purus risus sed mauris. Aenean nec mauris id lacus facilisis
                  ullamcorper. Curabitur sit amet volutpat velit. Duis
                  pellentesque rutrum luctus. Nulla facilisi. Etiam malesuada mi
                  eu tellus laoreet lobortis. Fusce ac odio nisl. Quisque
                  pretium lacinia sagittis.
                </p>
                <p>
                  Nullam feugiat nulla nec lectus luctus, ut ultricies magna
                  condimentum. Pellentesque at efficitur elit. Cras pulvinar
                  mauris eu sollicitudin auctor. Sed ut lorem nec leo tempor
                  placerat. Maecenas a dignissim libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
