import React from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const Mission = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-24 p-40"
      style={{marginTop: "200px"}}
      >
        
        <div>
          <h2 className="text-customBlue text-4xl font-bold ">MISSION</h2>
          <span className="inline-block h-2 w-1/5 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
          <p className="text-customBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat ultricies vehicula. Integer efficitur, leo ac laoreet
            hendrerit, ante est sollicitudin nibh, id cursus purus risus sed
            mauris. Aenean nec mauris id lacus facilisis ullamcorper.
          </p>
        </div>
        <div>
          <h2 className="text-customBlue text-4xl font-bold ">VISSION</h2>
          <span className="inline-block h-2 w-1/5 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
          <p className="text-customBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat ultricies vehicula. Integer efficitur, leo ac laoreet
            hendrerit, ante est sollicitudin nibh, id cursus purus risus sed
            mauris. Aenean nec mauris id lacus facilisis ullamcorper.
          </p>
        </div>
        <div>
          <h2 className="text-customBlue text-4xl font-bold ">OBJECTIVES</h2>
          <span className="inline-block h-2 w-1/5 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
          <p className="text-customBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat ultricies vehicula. Integer efficitur, leo ac laoreet
            hendrerit, ante est sollicitudin nibh, id cursus purus risus sed
            mauris. Aenean nec mauris id lacus facilisis ullamcorper.
          </p>
        </div>
        <div className="text-customBlue text-4xl font-bold">
          <span>TELLUS ERAT ALIQUAM</span>
          <br></br>
          <span>BLANDIT ETIAM</span>
          <br></br>

          <span className="inline-block h-2 w-1/5 bg-brightGreen mt-2 border-dashed border-b-2 border-brightGreen" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mx-24">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={banner1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={banner2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={banner3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Mission;
