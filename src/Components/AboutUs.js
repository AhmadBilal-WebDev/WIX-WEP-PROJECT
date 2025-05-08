import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import Footer from "../Components/Footer";
import SameHeader from '../Components/SameHeader'

const AboutUs = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const [showFAQsSecond, setShowFAQsSecond] = useState(false);
  const [showFAQsThird, setShowFAQsThird] = useState(false);

  const handleFAQsOne = () => {
    setShowFAQs(!showFAQs);
  };
  const handleFAQsSecond = () => {
    setShowFAQsSecond(!showFAQsSecond);
  };
  const handleFAQsThird = () => {
    setShowFAQsThird(!showFAQsThird);
  };

  const myCart = [
    {
      img: "https://static.wixstatic.com/media/c837a6_0ec0d6f727d94c21b1ed196548ea0ac5~mv2.jpg/v1/crop/x_64,y_174,w_896,h_618/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_35mm_film_portrait_of_an_American_woman_owner_of_a18f183b-b73e-4d37-9be7-2c.jpg",
      personName: "Roni Lavine",
      rank: "CEO",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_3505178adc624e40949609be8143e080~mv2.jpg/v1/crop/x_0,y_159,w_1024,h_706/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_35mm_film_portrait_of_an_african_american_male_9fdc7ca8-e1c6-4547-9f2a-c2ed.jpg",
      personName: "Shonad Evian",
      rank: "CTO",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_2bc9b0e9daaa4a79ac777d2d7732d172~mv2.jpg/v1/crop/x_0,y_73,w_2048,h_1412/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WixTemplates_a_natural_photograph_full_body_shot_of_a_Ukranian__0e47322e-8dd2-4114-a528-93.jpg",
      personName: "Yul Mclean",
      rank: "Cleaner",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_2f74a7a3826b40d3a9a642cdcfcf13ca~mv2.jpg/v1/crop/x_135,y_259,w_1737,h_1198/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WixTemplates_a_natural_photograph_full_body_shot_of_a_American__eec81e17-e004-4250-a8c7-af.jpg",
      personName: "Jade Leno",
      rank: "Cleaner",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_4ca4f70a725a464d8df6dbbc1e856493~mv2.jpg/v1/crop/x_203,y_419,w_1641,h_1132/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_35mm_film_portrait_of_a_native_american_male_cle_d1379215-fc6d-41ce-ac27-07.jpg",
      personName: "RLewis Baraka",
      rank: "Cleaner",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_62e2dad757e94d77b7406a9e7cf752cd~mv2.jpg/v1/crop/x_83,y_77,w_925,h_638/fill/w_293,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_a_natural_photograph_full_body_shot_of_an_asian__371df7fb-d7df-454b-9e9c-c6.jpg",
      personName: "Coral Tyde",
      rank: "Cleaner",
    },
  ];

  const myLabel = [
    {
      label: "First Name *",
    },
    {
      label: "Last Name *",
    },
    {
      label: "Email *",
    },
    {
      label: "Phone Number *",
    },
    {
      label: " Position *",
    },
    {
      label: " Tell us more *",
    },
  ];

  return (
    <>
      <SameHeader/>
      <div className="bg-yellow-50 min-h-screen py-5 md:pt-[10rem]">
        <section className="flex flex-col items-center gap-3">
          <p className="text-[2rem] font-light lg:text-[3rem]">About Us</p>
          <p className="text-center text-[1.1rem] font-light lg:text-[1.3rem]">
            Our story is a passion for <br /> clean homes and happy clients
          </p>
        </section>

        <section className="mt-10 lg:flex lg:flex-col lg:items-center">
          <img
            src="https://static.wixstatic.com/media/c837a6_2230293c8f9741828d8b0af12c7407e0f000.jpg/v1/fill/w_320,h_240,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/c837a6_2230293c8f9741828d8b0af12c7407e0f000.jpg"
            className="w-full lg:w-[70rem] lg:h-[35rem]"
          />
        </section>

        <div className="lg:px-[5rem] lg:flex lg:justify-start lg:items-center lg:gap-5 lg:mt-[10rem]">
          <section className="px-[1.2rem] py-16 flex flex-col gap-3 order-1 lg:order-2">
            <p className="font-light text-[2rem]">Who we are</p>
            <p className="font-light text-[1.2rem] lg:w-[30rem]">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </section>

          <section className="order-2 lg:order-1 ">
            <img
              src="https://static.wixstatic.com/media/c837a6_6e571ce38c9d4d00a3b0d80a7a02087a~mv2.jpg/v1/fill/w_320,h_245,al_r,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_6e571ce38c9d4d00a3b0d80a7a02087a~mv2.jpg"
              className="w-full lg:w-[25rem] lg:h-[30rem]"
            />
          </section>
        </div>

        <div>
          <p className="text-center text-[2rem] font-light lg:text-[3rem] lg:mt-[5rem]">
            Our Stellar Team
          </p>
          <section className="mt-16 px-[1.2rem] flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:px-[5rem]">
            {myCart.map((items, index) => (
              <div
                key={index}
                className="bg-yellow-200 rounded-lg lg:w-[22rem]"
              >
                <img src={items.img} className="w-full rounded-lg" />
                <div className="px-5 py-7 flex flex-col gap-2">
                  <p className="font-light text-[1.7rem]">{items.personName}</p>
                  <p className="font-light">{items.rank}</p>
                  <p className="text-[1rem]">
                    This is your Team Member description. <br /> Use this space
                    to write a brief description of this person’s role and
                    responsibilities, or add a short bio.
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <section className="py-20 px-[2rem] lg:px-[15rem]">
          <div className="flex flex-col items-center">
            <p className="text-[1.6rem] font-light lg:text-[2.3rem]">
              Frequently asked questions
            </p>
            <input
              type="text"
              placeholder="Looking for Something?"
              className="w-[calc(100vw-65px)] border-b border-b-black bg-transparent py-2 px-2 lg:hidden"
            />
            <IoSearchOutline className="text-[1.3rem] relative left-[8.5rem] bottom-7 lg:hidden" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="lg:hidden">Choose Categorey</p>
            <select className="w-[calc(100vw-65px)] border border-black bg-transparent py-2 lg:hidden">
              <option>General</option>
              <option>Seeting up FAQs</option>
            </select>
            <div className="hidden lg:flex lg:gap-5 lg:mt-5">
              <button>General</button>
              <button>Seeting up FAQs</button>
            </div>
          </div>

          <section>
            <div className="flex justify-between mt-14 py-5">
              <p className="lg:text-[1.1rem]">What is an FAQ section?</p>
              <button onClick={handleFAQsOne}>
                <IoIosArrowDown
                  className={`text-[1.2rem] transition-transform duration-300 ${
                    showFAQs ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {showFAQs && (
              <div className="pb-5">
                <p className="font-light">
                  FAQs are a great way to help site visitors find quick answers
                  to common questions about your business and create a better
                  navigation experience.
                </p>

                <div className="flex gap-5 mt-6 text-[1.1rem]">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaLinkedin />
                  <GoLink />
                </div>
              </div>
            )}

            <div className="w-full border-b border-b-black"></div>
          </section>

          <section>
            <div className="flex justify-between mt-14 py-5">
              <p className="lg:text-[1.1rem]">Why do FAQ matter?</p>
              <button onClick={handleFAQsSecond}>
                <IoIosArrowDown
                  className={`text-[1.2rem] transition-transform duration-300 ${
                    showFAQsSecond ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {showFAQsSecond && (
              <div className="pb-5">
                <p className="font-light">
                  FAQs are a great way to help site visitors find quick answers
                  to common questions about your business and create a better
                  navigation experience.
                </p>

                <div className="flex gap-5 mt-6 text-[1.1rem]">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaLinkedin />
                  <GoLink />
                </div>
              </div>
            )}

            <div className="w-full border-b border-b-black"></div>
          </section>

          <section>
            <div className="flex justify-between mt-14 py-5">
              <p className="lg:text-[1.1rem]">Where can i do add my FAQ?`</p>
              <button onClick={handleFAQsThird}>
                <IoIosArrowDown
                  className={`text-[1.2rem] transition-transform duration-300 ${
                    showFAQsThird ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {showFAQsThird && (
              <div className="pb-5">
                <p className="font-light">
                  FAQs are a great way to help site visitors find quick answers
                  to common questions about your business and create a better
                  navigation experience.
                </p>

                <div className="flex gap-5 mt-6 text-[1.1rem]">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaLinkedin />
                  <GoLink />
                </div>
              </div>
            )}

            <div className="w-full border-b border-b-black"></div>
          </section>
        </section>

        <section className="bg-[url('https://static.wixstatic.com/media/c837a6_f4a278ec34164b2cb3727fcfb99e1914~mv2.png/v1/fill/w_1280,h_925,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f4a278ec34164b2cb3727fcfb99e1914~mv2.png')] bg-no-repeat bg-cover min-h-screen flex flex-col justify-center items-center py-5 border-2xl">
          <div className="bg-yellow-50 w-[calc(100vw-40px)] rounded-xl flex flex-col items-center py-8 lg:w-[35rem] ">
            <div className="flex flex-col gap-3">
              <h1 className="text-[1.8rem] font-light text-center">
                Work With Us
              </h1>
              <p className="text-center font-light leading-loose text-[1.1rem]">
                Join our team for a fulfilling <br /> and rewarding career.
              </p>
            </div>

            <div>
              {myLabel.map((items, index) => (
                <div key={index} className="flex flex-col gap-2 py-3">
                  <label className="text-sm">{items.label}</label>
                  <input
                    type="text"
                    className={`bg-transparent border border-black  w-[calc(100vw-80px)] py-2 rounded-lg lg:w-[calc(100vw-800px)] ${
                      index === myLabel.length - 1 ? "h-[8rem]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div>
              <button className="bg-black text-white py-2 w-[15rem] rounded-full">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
