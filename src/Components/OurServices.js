import React from "react";
import Footer from "./Footer";
import SameHeader from '../Components/SameHeader'

const OurServices = () => {
  const myData = [
    {
      img: "https://static.wixstatic.com/media/84770f_a28eabedca454c768ad165ba8b0501ec~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_a28eabedca454c768ad165ba8b0501ec~mv2.jpg",
      title: "Deep Cleaning",
      price: "$100",
      para: "Thorough cleaning in every nook and cranny of your home.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_c36985cdbd414119ac2158a06e3c0c00~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_c36985cdbd414119ac2158a06e3c0c00~mv2.jpg",
      title: "Furniture Cleaning",
      price: "$100",
      para: "Ensuring your furniture is refreshed, sanitized, and looks as good as new.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_922f69f0ad3d4e8fb2783b182608d39c~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_922f69f0ad3d4e8fb2783b182608d39c~mv2.jpg",
      title: "Kitchen Cleaning",
      price: "$200",
      para: "Leaving your kitchen spotless and hygienic.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_d358929fbebb4420a41fad5e64d3429c~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d358929fbebb4420a41fad5e64d3429c~mv2.jpg",
      title: "Move In/Move Out",
      price: "$300",
      para: "Hassle-free cleaning for a smooth transition.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_0c09417837a04f32aa6ffd0cca879d36~mv2.jpeg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0c09417837a04f32aa6ffd0cca879d36~mv2.jpeg",
      title: "Loundry",
      price: "5$ per LB",
      para: "Washing, folding and ironing, providing you with neatly pressed clothes.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_8e4e5fd7c67340f980d7abe6d99a3267~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8e4e5fd7c67340f980d7abe6d99a3267~mv2.jpg",
      title: "Window Cleaning",
      price: "100",
      para: "Crystal-clear results, enhancing natural light and a sparkling view.",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_a6f1c5955cd64e64beb2924dc940d522~mv2.jpg/v1/fill/w_240,h_158,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_a6f1c5955cd64e64beb2924dc940d522~mv2.jpg",
      title: "Office Cleaning",
      price: "$300",
      para: "Tailored to maintain a clean workspace, promoting a productive environment.",
    },
  ];
  return (
    <>
    <SameHeader/>
      <div className="bg-yellow-50 min-h-screen">
        <section className="flex flex-col items-center pt-3 lg:pt-[12rem]">
          <h1 className="text-[2rem] font-light md:text-[2.5rem]">
            Our Srevices
          </h1>
          <p className="font-light">What can we clean foy your today</p>
        </section>

        <section className="flex justify-center pt-[5rem] md:pt-[6rem]">
          <div>
            {myData.map((data, index) => (
              <div>
                <div className="w-full border-t border-t-black border-opacity-20 border-t-[0.5px] hidden md:block md:pt-[3rem] "></div>
                <div className="w-[15rem] flex flex-col gap-3 md:w-full md:flex-row md:justify-around pb-[3rem]">
                  <div className="flex flex-col gap-3 md:flex-row md:gap-5">
                    <img src={data.img} className="rounded-lg w-[15rem]" />
                    <div className="flex flex-col gap-1">
                      <p className="md:text-[1.8rem] md:text-light">
                        {data.title}
                      </p>
                      <p className="font-light text-[0.900rem] md:text-[1.2rem] md:w-[15rem] lg:w-[25rem]">
                        {data.para}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="md:tetx-[1.2rem]">{data.price}</p>
                  </div>

                  <div className="flex justify-center">
                    <button className="bg-black text-white w-[20rem] py-3 rounded-full md:w-[10rem] md:h-12 ">
                      Book a Cleaner
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default OurServices;
