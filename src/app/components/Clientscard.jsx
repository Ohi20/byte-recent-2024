import React from "react";

const Clientscard = ({ imgUrl }) => {
  return (
    <div>
      <div
        className="h-96 md:h-96 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4 ">
        <h5 className="text-xl font-semibold mb-2 font-serif">{title}</h5>
      </div> */}
    </div>
  );
};

export default Clientscard;
