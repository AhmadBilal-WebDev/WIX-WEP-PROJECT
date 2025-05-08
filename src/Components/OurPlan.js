import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import Footer from "./Footer";
import SameHeader from "./SameHeader";

const OurPlan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  const handleOpening = () => {
    setIsOpen(!isOpen);
  };

  const handleOpeningSecond = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  const handleOpeningThird = () => {
    setIsOpenThird(!isOpenThird);
  };

  return (
    <>
      <SameHeader/>
      <div className="bg-yellow-50 min-h-screen lg:hidden">
        <section>
          <div className="flex flex-col items-center gap-3 pt-5">
            <p className="text-center text-[1.9rem] font-light">Our Plans</p>
            <p className="text-center text-[1rem] font-light">
              Elevate your living with our cleaning <br /> subscription plan.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <section className="bg-yellow-200 w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center">
              <div className="py-5 flex flex-col items-center">
                <p className="font-light text-[1.1rem]">The Bi-Monthly Plan</p>
                <p className="font-light text-[2.3rem]">$280</p>
                <p className="text-[0.800rem]">Every Month</p>
              </div>

              <div className="mt-5">
                <button className="bg-black text-white w-[15rem] rounded-full py-3">
                  Select
                </button>
              </div>

              <div className="mt-7">
                <button onClick={handleOpening}>
                  {!isOpen ? (
                    <MdKeyboardArrowDown className="text-[1.5rem]" />
                  ) : (
                    isOpen
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black">
                  <div className="flex flex-col gap-3 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}

                    <div className="flex justify-center">
                      <button onClick={handleOpening}>
                        {isOpen ? (
                          <IoIosArrowUp className="text-[1.1rem]" />
                        ) : (
                          isOpen
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center mt-10">
            <section className="bg-white w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center">
              <div className="py-5 flex flex-col items-center">
                <p className="font-light text-[1.1rem]">The Weakly Plan</p>
                <p className="font-light text-[2.3rem]">$480</p>
                <p className="text-[0.800rem]">Every Month</p>
              </div>

              <div className="mt-5">
                <button className="bg-black text-white w-[15rem] rounded-full py-3">
                  Select
                </button>
              </div>

              <div className="mt-7">
                <button onClick={handleOpeningSecond}>
                  {!isOpenSecond ? (
                    <MdKeyboardArrowDown className="text-[1.5rem]" />
                  ) : (
                    isOpenSecond
                  )}
                </button>
              </div>

              {isOpenSecond && (
                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black">
                  <div className="flex flex-col gap-3 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}

                    <div className="flex justify-center">
                      <button onClick={handleOpeningSecond}>
                        {isOpenSecond ? (
                          <IoIosArrowUp className="text-[1.1rem]" />
                        ) : (
                          isOpenSecond
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex flex-col items-center mt-10">
            <section className="bg-white w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center">
              <div className="py-5 flex flex-col items-center">
                <p className="font-light text-[1.1rem]">The Office Plan</p>
                <p className="font-light text-[2.3rem]">$950</p>
                <p className="text-[0.800rem]">Every Month</p>
              </div>

              <div className="mt-5">
                <button className="bg-black text-white w-[15rem] rounded-full py-3">
                  Select
                </button>
              </div>

              <div className="mt-7">
                <button onClick={handleOpeningThird}>
                  {!isOpenThird ? (
                    <MdKeyboardArrowDown className="text-[1.5rem]" />
                  ) : (
                    isOpenThird
                  )}
                </button>
              </div>

              {isOpenThird && (
                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black">
                  <div className="flex flex-col gap-3 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}

                    <div className="flex justify-center">
                      <button onClick={handleOpeningThird}>
                        {isOpenThird ? (
                          <IoIosArrowUp className="text-[1.1rem]" />
                        ) : (
                          isOpenThird
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </section>
      </div>

      <div className="bg-yellow-50 min-h-screen pt-[10rem] hidden lg:block pb-12">
        <section className="flex flex-col items-center gap-3">
          <p className="text-center text-[2.5rem] font-light">Our Plans</p>
          <p className="text-center text-[1.4rem] font-light">
            Elevate your living with our cleaning subscription plan.
          </p>
        </section>

        <div className="flex justify-center gap-10 pt-5">
          <section>
            <div className="flex flex-col items-center mt-10">
              <section className="bg-white w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center lg:w-[20rem]">
                <div className="py-5 flex flex-col items-center">
                  <p className="font-light text-[1.1rem]">The Weakly Plan</p>
                  <p className="font-light text-[2.3rem]">$480</p>
                  <p className="text-[0.800rem]">Every Month</p>
                </div>

                <div className="mt-12">
                  <button className="bg-black text-white w-[15rem] rounded-full py-3">
                    Select
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black mt-5">
                  <div className="flex flex-col gap-6 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section>
            <div className="flex flex-col items-center mt-10">
              <section className="bg-yellow-200 w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center lg:w-[20rem]">
                <div className="py-5 flex flex-col items-center">
                  <p className="font-light text-[1.1rem]">
                    The Bi-Monthly Plan
                  </p>
                  <p className="font-light text-[2.3rem]">$280</p>
                  <p className="text-[0.800rem]">Every Month</p>
                </div>

                <div className="mt-12">
                  <button className="bg-black text-white w-[15rem] rounded-full py-3">
                    Select
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black mt-5">
                  <div className="flex flex-col gap-6 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section>
            <div className="flex flex-col items-center mt-10">
              <section className="bg-white w-[calc(100vw-45px)] rounded-t-xl border border-black border-w-5 relative flex flex-col items-center lg:w-[20rem]">
                <div className="py-5 flex flex-col items-center">
                  <p className="font-light text-[1.1rem]">The Office Plan</p>
                  <p className="font-light text-[2.3rem]">$950</p>
                  <p className="text-[0.800rem]">Every Month</p>
                </div>

                <div className="mt-12">
                  <button className="bg-black text-white w-[15rem] rounded-full py-3">
                    Select
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 bg-white w-full border-t border-t-black mt-5">
                  <div className="flex flex-col gap-6 py-4">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <div className="flex items-center gap-5">
                          <p>
                            <GoArrowRight />
                          </p>
                          <p>I’m a benefit</p>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurPlan;
