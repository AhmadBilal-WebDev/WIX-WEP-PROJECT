import React from "react";
import Footer from "./Footer";

const CurrentBody = () => {
  const benefits = Array(5).fill("I’m a benefit");
  const myImage = "https://cdn-icons-png.flaticon.com/128/956/956100.png";

  const rightArrow = "https://cdn-icons-png.flaticon.com/128/8213/8213597.png";
  return (
    <div>
      <div>
        <div className='flex justify-center min-h-screen text-white bg-no-repeat bg-cover bg-[url("https://static.wixstatic.com/media/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg/v1/fill/w_320,h_892,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg")] md:hidden'>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center py-12 mt-[4rem] gap-4">
              <p className="text-[1.4rem]">How It Works</p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                className="w-[4rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
                className="w-[3rem]"
              />
              <p className="text-center text-[1.1rem]">
                Choose your desired <br /> cleaning service
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                className="w-[4rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
                className="w-[3rem]"
              />
              <p className="text-center text-[1.1rem]">
                Use the Cleanic App <br /> for laundry pickup
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                className="w-[4rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
                className="w-[3rem]"
              />
              <p className="text-center text-[1.1rem]">
                Leave us the keys and we'll
                <br /> take care of the rest
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                className="w-[4rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
                className="w-[3rem]"
              />
              <p className="text-center text-[1.1rem]">
                Welcome back to your <br /> home clean home!
              </p>
            </div>
          </div>
        </div>

        <div className='mt-[5rem] justify-center items-center h-[30rem] text-white bg-no-repeat bg-cover bg-[url("https://static.wixstatic.com/media/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg/v1/fill/w_1314,h_475,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg")] hidden md:flex'>
          <div className="flex flex-col items-center gap-10">
            <div>
              <p className="text-[2.5rem]">How It Works</p>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                  className="w-[4rem]"
                />
                <p className="text-center text-[1.1rem]">
                  Choose your desired <br /> cleaning service
                </p>
              </div>

              <div>
                <img src={rightArrow} className="w-[3rem]" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                  className="w-[4rem]"
                />
                <p className="text-center text-[1.1rem]">
                  Use the Cleanic App <br /> for laundry pickup
                </p>
              </div>

              <div>
                <img src={rightArrow} className="w-[3rem]" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                  className="w-[4rem]"
                />
                <p className="text-center text-[1.1rem]">
                  Leave us the keys and we'll
                  <br /> take care of the rest
                </p>
              </div>

              <div>
                <img src={rightArrow} className="w-[3rem]" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
                  className="w-[4rem]"
                />
                <p className="text-center text-[1.1rem]">
                  Welcome back to your <br /> home clean home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[rgb(65,74,76)] py-[8rem] md:flex md:justify-around md:items-center md:py-0">
        <div className="flex flex-col justify-center items-center gap-5 md:items-start">
          <h1 className="text-center text-white text-[1.8rem] font-light leading-tight md:text-start md:text-[2.2rem]">
            Our Plans & <br /> Special Discounts
          </h1>
          <p className="text-center text-white text-[0.900rem] font-light md:text-start md:text-[1.1rem]">
            I'm a paragraph. Click here to add <br /> your own text and edit me.
            It's easy.
            <br /> I'm a paragraph. Click here to add <br /> your own text and
            edit me. It's easy.
          </p>
          <button className="bg-white text-black py-2 w-[13rem] rounded-full">
            Choose Your Plan
          </button>
        </div>

        <div className="px-6 mt-[6rem] md:mt-[0rem] md:px-0">
          <div className="bg-[rgb(247,233,142)] h-[18rem] rounded-t-3xl flex flex-col items-center justify-center md:w-[25rem]">
            <h1 className="text-[1.3rem] text-center">The Bi-Monthly Plan</h1>
            <p className="text-[4rem]">$280</p>
            <p>Every month</p>
            <br />
            <button className="bg-black text-white w-[12rem] py-3 rounded-full">
              Select
            </button>
          </div>

          <div className="bg-white h-[20rem] rounded-b-xl flex flex-col justify-center gap-7 md:w-[25rem]">
            {benefits.map((items, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                  className="w-7 h-7"
                />
                <p className="pl-2">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div>
          <img
            src="https://static.wixstatic.com/media/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg/v1/fill/w_320,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg"
            className="w-full"
          />
        </div>

        <div className="bg-yellow-50 px-5 flex flex-col justify-center min-h-screen py-[3rem]">
          <div className="mt-[3rem]">
            <h1 className="text-[1.7rem] font-light leading-tight">
              Why Choose <br /> The Cleanic
            </h1>
          </div>

          <div className="mt-[2rem]">
            <div className="flex items-center gap-2">
              <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
              <p className="text-[1.5rem] font-light">Qualified Team</p>
            </div>
            <div>
              <div className="ml-9">
                <p className="text-[1.1rem] font-light">
                  I'm a paragraph. Click here to <br /> add your own text and
                  edit me.
                  <br />
                  It's easy.
                </p>
              </div>
            </div>
            <br />

            <div className="flex items-center gap-2">
              <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
              <p className="text-[1.5rem] font-light">Eco-Friendly Materials</p>
            </div>
            <div>
              <div className="ml-9">
                <p className="text-[1.1rem] font-light">
                  I'm a paragraph. Click here to <br /> add your own text and
                  edit me.
                  <br />
                  It's easy.
                </p>
              </div>
            </div>
            <br />

            <div className="flex items-center gap-2">
              <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
              <p className="text-[1.5rem] font-light">Same Day Availability</p>
            </div>
            <div>
              <div className="ml-9">
                <p className="text-[1.1rem] font-light">
                  I'm a paragraph. Click here to <br /> add your own text and
                  edit me.
                  <br />
                  It's easy.
                </p>
              </div>
            </div>
            <br />

            <div className="flex items-center gap-2">
              <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
              <p className="text-[1.5rem] font-light">Outstanding Support</p>
            </div>
            <div>
              <div className="ml-9">
                <p className="text-[1.1rem] font-light">
                  I'm a paragraph. Click here to <br /> add your own text and
                  edit me.
                  <br />
                  It's easy.
                </p>
              </div>
            </div>
          </div>
          <br />

          <div className="mt-5">
            <button className="bg-black text-white w-[15rem] rounded-full py-3 text-[1.2rem]">
              Get to Know Us
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-10 min-h-screen bg-yellow-50">
        <section>
          <img
            src="https://static.wixstatic.com/media/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg/v1/fill/w_320,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg"
            className="w-[25rem] h-[33rem] w-[23rem]"
          />
        </section>

        <div className="flex flex-col justify-center ">
          <section>
            <p className="text-[2.8rem] font-light leading-tight">
              Why Choose The Cleanic
            </p>
          </section>

          <div className="mt-[2rem] grid grid-cols-2 gap-12">
            <section>
              <div className="flex items-center gap-2">
                <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
                <p className="text-[1.5rem] font-light">Qualified Team</p>
              </div>

              <div className="ml-9">
                <p className="text-[1.1rem] font-light">
                  I'm a paragraph. Click here to <br /> add your own text and
                  edit me.
                  <br />
                  It's easy.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
                <p className="text-[1.5rem] font-light">
                  Eco-Friendly Materials
                </p>
              </div>
              <div>
                <div className="ml-9">
                  <p className="text-[1.1rem] font-light">
                    I'm a paragraph. Click here to <br /> add your own text and
                    edit me.
                    <br />
                    It's easy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
                <p className="text-[1.5rem] font-light">
                  Same Day Availability
                </p>
              </div>
              <div>
                <div className="ml-9">
                  <p className="text-[1.1rem] font-light">
                    I'm a paragraph. Click here to <br /> add your own text and
                    edit me.
                    <br />
                    It's easy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <img src={myImage} className="w-[1.4rem] h-[1.4rem]" />
                <p className="text-[1.5rem] font-light">Outstanding Support</p>
              </div>
              <div>
                <div className="ml-9">
                  <p className="text-[1.1rem] font-light">
                    I'm a paragraph. Click here to <br /> add your own text and
                    edit me.
                    <br />
                    It's easy.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-5">
            <button className="bg-black text-white w-[15rem] rounded-full py-3 text-[1.2rem]">
              Get to Know Us
            </button>
          </section>
        </div>
      </div>

      <div className="min-h-screen">
        <img
          src="https://static.wixstatic.com/media/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg/v1/fill/w_320,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg"
          className="h-[50rem] w-full"
        />
      </div>

      <Footer/>
    </div>
  );
};

export default CurrentBody;
