import React, { useState } from "react";
import NextBody from '../Components/NextBody'

const MainBody = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="text-white min-h-screen min-w-screen bg-center bg-cover bg-no-repeat bg-[url('https://static.wixstatic.com/media/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg/v1/fill/w_980,h_942,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg')] brightness-75 lg:w-full lg:h-[1000px] block">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-100px)] md:h-[calc(100vh-130px)] md:flex md:flex-col md:items-start md:justify-center md:pl-[5rem] lg:min-h-screen xl:h-[calc(100vh-0px)]">
          <p className="text-center text-[2.3rem] w-full leading-none md:text-start xl:text-[3rem]">
            Remarkably Cleaner.
            <br /> Amazingly Simpler.
          </p>
          <p className="text-center text-[1rem] mt-3 w-[calc(100vw-100px)] md:hidden">
            Providing spotless cleaning <br /> services for busy people since
            2035.
            <br />
            Always on time, always smiling.
          </p>
          <p className="text-center text-[1rem] mt-3 w-[calc(100vw-100px)] text-start hidden md:block xl:text-[1.2rem]">
            Providing spotless cleaning services for busy people
            <br /> since 2035. Always on time, always smiling.
          </p>
          <button className="text-black bg-white border px-12 py-3 rounded-full mt-5">
            Book Now
          </button>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center items-center my-5 lg:hidden">
        <div className="bg-[rgb(247,233,142)] py-12 w-[calc(100vw-3rem)] border rounded-lg xs:w-[calc(100vw-5rem)] sm:w-[calc(100vw-8rem)]">
          <div className="flex justify-center text-center font-light text-[2rem]">
            <p>
              Get a Free <br /> Estimate
            </p>
          </div>

          <div className="mt-8">
            <p className="text-center font-light text-[1.3rem]">Contact us</p>
          </div>

          <div className="mt-8">
            <div className="flex flex-col px-5 gap-2">
              <label className="text-[1.1rem] font-light">First name *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">Last name *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">Email *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">Phone number *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">Address *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">City *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-full h-[3rem] rounded-xl"
              />
              <br />
              <label className="text-[1.1rem] font-light">
                Number Of rooms *
              </label>
              <select className="bg-transparent border border-black w-full h-[3rem] rounded-xl">
                <option></option>
                <option>2 betroom</option>
                <option>3 betroom</option>
                <option>4 betroom</option>
              </select>
              <br />
              <label className="text-[1.1rem] font-light">
                Choose your Services *
              </label>
              <select className="bg-transparent border border-black w-full h-[3rem] rounded-xl">
                <option></option>
                <option>Deep Cleaning</option>
                <option>Lundry</option>
                <option>Moving in/out</option>
              </select>
              <br />
              <button className="bg-black text-white px-12 py-3 rounded-full">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w1full flex justify-end hidden lg:block ">
        <div className="h-[33rem] w-[43rem] rounded-xl bg-[rgb(247,233,143)] flex flex-col items-center absolute top-[25rem] right-[5rem] p-5 lg:w-[47rem] lg:top-[41rem]">
          <div>
            <p className=" text-[2rem] font-light text-center">
              Get a Free Estimate
            </p>
          </div>

          <div>
            <p className=" font-light text-[1.1rem] mt-10 text-center">
              Contact us
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 px-4 gap-8 mt-8">
            <div>
              <label className="text-[0.900rem] font-light">First name *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>
            <div>
              <label className="text-[0.900rem] font-light">Last name *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>
            <div>
              <label className="text-[0.900rem] font-light">Email *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>

            <div>
              <label className="text-[0.900rem] font-light">
                Phone number *
              </label>
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>
            <div>
              <label className="text-[0.900rem] font-light">Address *</label>
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>
            <div>
              <label className="text-[0.900rem] font-light">City *</label>
              <br />
              <input
                type="text"
                className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl"
              />
            </div>

            <div>
              <label className="text-[1rem] font-light">
                Number of rooms *
              </label>
              <select className="bg-transparent border border-black w-[12rem] h-[2.5rem] rounded-xl">
                <option></option>
                <option>Deep Cleaning</option>
                <option>Lundry</option>
                <option>Moving in/out</option>
              </select>
            </div>
            <div>
              <label className="text-[1rem] font-light">
                Choose your Services *
              </label>
              <select className="bg-transparent border border-black h-[2.5rem] rounded-xl w-[26.5rem] md: w-[25.5rem]">
                <option></option>
                <option>Deep Cleaning</option>
                <option>Lundry</option>
                <option>Moving in/out</option>
              </select>
            </div>
            <br />
          </div>

          <div className="mt-10 flex justify-center">
            <button className="bg-black text-white px-12 py-2 rounded-full w-[15rem]">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 xs:px-[2.4rem] sm:px-[4rem] lg:px-[5.5rem] lg:mt-[20rem]">
        <div>
          <p className="text-center text-[1.8rem] font-light md:text-[2.3rem] lg:text-start">
            Shiny Happy Clients
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4 lg:flex lg:flex-row">
          <div className="bg-[rgb(247,233,142)] h-[18rem] px-[2rem] xs:flex xs:flex-col xs:items-center lg:h-[20rem] lg:text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
              className="w-[5rem]"
            />
            <p classNam1="text-[1.4rem] font-light lg:text-[1.2rem]">
              “I’m addicted to the Cleanic!”
            </p>
            <p class="mt-2 font-light lg:text-[0.900rem]">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <p className="mt-3 font-light lg:text-[0.800rem]">Jane Deirs, AR</p>
          </div>

          <div className="bg-[rgb(247,233,142)] h-[18rem] px-[2rem] xs:flex xs:flex-col xs:items-center lg:h-[20rem] lg:text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
              className="w-[5rem]"
            />
            <p className="text-[1.3rem] font-light lg:text-[1.1rem]">
              “My flat looks like a boutique hotel”
            </p>
            <p class="mt-2 font-light lg:text-[0.900rem]">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <p className="mt-3 font-light lg:text-[0.800rem]">
              Eric Laguardia, CA
            </p>
          </div>

          <div className="bg-[rgb(247,233,142)] h-[18rem] px-[2rem] xs:flex xs:flex-col xs:items-center lg:h-[20rem] lg:text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
              className="w-[5rem]"
            />
            <p className="text-[1.3rem] font-light l1:text-[1.2rem] lg:text-[1rem]">
              “Soft perfection”
            </p>
            <p class="mt-2 font-light lg:text-[0.900rem] lg:text-[0.800rem]">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <p className="mt-3 font-light lg:text-[0.800rem]">Lena Rogel, RI</p>
          </div>

          <div className="bg-[rgb(247,233,142)] h-[18rem] px-[2rem] xs:flex xs:flex-col xs:items-center lg:h-[20rem] lg:text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
              className="w-[5rem]"
            />
            <p className="text-[1.3rem] font-light lg:text-[1.2rem]">
              “I’m obsessed”
            </p>
            <p class="mt-2 font-light lg:text-[0.900rem]">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <p className="mt-3 font-light lg:text-[0.800rem]">
              Jean McDermott, CT
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(65,74,76)] min-h-screen flex justify-center sm:mt-[5rem]">
        <div className="w-full text-white mt-[6rem] flex flex-col items-center w-full">
          <div>
            <p className="text-center text-[1.6rem] lg:text-[2.5rem]">
              For Anything You Need
            </p>
            <p className="text-center text-[1rem] mt-3 lg:text-[1.5rem]">
              Our Stellar Services
            </p>
          </div>
          <br />

          <div className="lg:flex lg:gap-3 lg:mt-5">
            <div className="w-[21rem] flex flex-col items-center">
              <img
                src={
                  "https://tse4.mm.bing.net/th?id=OIP.rIEyaRpW3zFEO--hUr4NQAHaGL&pid=Api&h=220&P=0"
                }
                className="w-[21rem] h-[21rem] rounded-xl"
              />
              <p className="relative bottom-[3.5rem] right-[4.5rem] text-[1rem]">
                Move In/Move Out
              </p>
            </div>

            <div className="w-[21rem] flex flex-col items-center">
              <img
                src={
                  " https://tse1.mm.bing.net/th?id=OIP.C0tfPFAUTyqhTXxZz4Kk0AHaEP&pid=Api&h=220&P=0"
                }
                className="w-[21rem] h-[21rem] rounded-xl"
              />
              <p className="relative bottom-[3.5rem] right-[4.5rem] text-[1rem]">
                Deep Cleaning
              </p>
            </div>

            <div className="w-[21rem] flex flex-col items-center">
              <img
                src={
                  "https://tse4.mm.bing.net/th?id=OIP.sEIUr2rwT-L9M0iqjQ1LrAHaEH&pid=Api&h=220&P=0"
                }
                className="w-[21rem] h-[21rem] rounded-xl"
              />
              <p className="relative bottom-[3.5rem] right-[4.5rem] text-[1rem]">
                Loundry
              </p>
            </div>
          </div>
          <br />

          <div className="mb-5">
            <button className="bg-white text-black w-[18rem] py-2 rounded-full text-[1.5rem] hover:text-white hover:bg-[rgb(65,74,76)]">
              See All Services
            </button>
          </div>
          <br />
        </div>
      </div>

      <div className="lg:flex lg:justify-center">
        <div className="bg-[rgb(247,233,142)] h-[20rem] w-full px px-2 flex flex-col justify-center items-center lg:h-[15rem] lg:w-[calc(100vw-4rem)] lg:mt-[5rem]">
          <div className="">
            <p className="text-[2rem] font-light lg:text-[3rem]">Featured In</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-5 gap-5 lg:flex lg:flex-row lg:mt-5 lg:gap-[3rem]">
            <div className="flex gap-5 lg:gap-[3rem]">
              <p className="text-[1.2rem] font-bold lg:text-[1.5rem]">Latch.</p>
              <p className="text-[1.1rem] font-bold lg:text-[1.5rem]">
                𝓈𝓉𝒶𝓁𝓁𝑒𝑀𝒶𝓇𝒾𝓈
              </p>
              <p className="text-[1.2rem] font-bold lg:text-[1.5rem]">
                Gasparyan
              </p>
            </div>

            <div className="flex gap-7 lg:gap-[3rem]">
              <p className="text-[1.2rem] font-bold lg:text-[1.5rem]">
                ＶＯＬＶＥ
              </p>
              <p className="text-[1.2rem] font-bold lg:text-[1.5rem]">𝔩𝔬𝔳𝔢𝔯𝔞</p>
            </div>
          </div>
        </div>
      </div>

      <NextBody/>
    </div>
  );
};

export default MainBody;
