import React, { useEffect, useRef, useState } from "react";
import CurrentBody from "./CurrentBody";

const images = [
  {
    name: "Couch Cleaning",
    img1: "https://static.wixstatic.com/media/c837a6_7dfebfa0673449d691f77fc9d369962d~mv2.jpg/v1/crop/x_788,y_789,w_701,h_669/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg",
    imgA: "https://static.wixstatic.com/media/c837a6_8bbdbc4eb5e94cf493cd8f97fda4d5e2~mv2.jpg/v1/crop/x_757,y_747,w_757,h_723/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg",
  },
  {
    img1: "https://static.wixstatic.com/media/c837a6_35b2191e3ad84e1c96308b04f9716011~mv2.jpg/v1/crop/x_227,y_264,w_1593,h_1520/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.jpg",
    imgA: "https://static.wixstatic.com/media/c837a6_5ae967b8d57e43be9925fc596c264bdb~mv2.jpg/v1/crop/x_278,y_312,w_1492,h_1423/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.jpg",
  },
  {
    img1: "https://static.wixstatic.com/media/c837a6_e500340d84704dc8b4e668423995dd8e~mv2.jpg/v1/crop/x_93,y_135,w_839,h_800/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg",
    imgA: "https://static.wixstatic.com/media/c837a6_5f1db4e549ad4558907edd70fdcbd1c9~mv2.jpg/v1/crop/x_101,y_148,w_825,h_787/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg",
  },
];

const SingleImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((next) => (next === images.length - 1 ? 0 : next + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-8 bg-yellow-50 px-4 py-10">
      <h2 className="text-center text-2xl font-light lg:text-5xl">
        Before & After
      </h2>

      <div className="flex items-center justify-center w-full max-w-6xl mx-auto gap-4">
        <button onClick={prevSlide} className="text-2xl">
          &#10094;
        </button>

        <div className="flex flex-col justify-center lg:flex-row items-center gap-4 overflow-hidden w-full">
          <div className="relative w-full max-w-md h-72 lg:h-[30rem] overflow-hidden border rounded-lg">
            <div
              ref={slideRef}
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.img1}
                  alt={`Before-${i}`}
                  className="w-full lg:h-[30rem] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-md h-72 lg:h-[30rem] overflow-hidden border rounded-lg">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.imgA}
                  alt={`After-${i}`}
                  className="w-full lg:h-[30rem] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="text-2xl font-bold text-gray-600 hover:text-black"
        >
          &#10095;
        </button>
      </div>

      <CurrentBody />
    </section>
  );
};

export default SingleImageSlider;
