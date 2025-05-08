import React, { useState } from "react";

const images = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.sEIUr2rwT-L9M0iqjQ1LrAHaEH&pid=Api&h=220&P=0",
    img2: "https://static.wixstatic.com/media/c837a6_5f1db4e549ad4558907edd70fdcbd1c9~mv2.jpg/v1/crop/x_101,y_148,w_825,h_787/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg",
  },
  {
    img: "https://static.wixstatic.com/media/c837a6_7dfebfa0673449d691f77fc9d369962d~mv2.jpg/v1/crop/x_788,y_789,w_701,h_669/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg",
    img2: "https://static.wixstatic.com/media/c837a6_5f1db4e549ad4558907edd70fdcbd1c9~mv2.jpg/v1/crop/x_101,y_148,w_825,h_787/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg",
  },
];

const SingleImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[300px] mx-auto flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-[-40px] text-3xl bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
      >
        &#10094;
      </button>

      <div className="">
        <div className="w-[300px] h-[300px] overflow-hidden border rounded-md">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img.img}
                alt={`slide-${index}`}
                className="w-[300px] h-[300px] object-cover shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="w-[300px] h-[300px] overflow-hidden border rounded-md">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img.img2}
                alt={`slide-${index}`}
                className="w-[300px] h-[300px] object-cover shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-[-40px] text-3xl bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SingleImageSlider;

// import React, { useState } from "react";

// const images = [
//   "https://tse4.mm.bing.net/th?id=OIP.sEIUr2rwT-L9M0iqjQ1LrAHaEH&pid=Api&h=220&P=0",
//   "https://tse4.mm.bing.net/th?id=OIP.sEIUr2rwT-L9M0iqjQ1LrAHaEH&pid=Api&h=220&P=0",
//   "https://tse4.mm.bing.net/th?id=OIP.sEIUr2rwT-L9M0iqjQ1LrAHaEH&pid=Api&h=220&P=0",
// ];

// const SingleImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-[300px] mx-auto flex items-center justify-center">
//       <button
//         onClick={prevSlide}
//         className="absolute left-[-40px] text-3xl bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
//       >
//         &#10094;
//       </button>

//       {/* Image Display */}
//       <div className="w-[300px] h-[300px] overflow-hidden border rounded-md">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 300}px)` }}
//         >
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`slide-${index}`}
//               className="w-[300px] h-[300px] object-cover shrink-0"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-[-40px] text-3xl bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default SingleImageSlider;
