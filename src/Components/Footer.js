import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="min-h-screen bg-yellow-200 px-5 py-[5rem] lg:hidden">
        <section className="flex flex-col gap-4 md:gap-[5rem]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15219/15219414.png"
              className="w-7 h-7"
            />
            <p className="text-[1.5rem]">The Cleanic</p>
          </div>

          <div>
            <button className="bg-black text-white w-[10rem] py-2 rounded-full text-[1rem]">
              Book Now
            </button>
          </div>
        </section>

        <section className="mt-[3rem] text-[1rem]">
          <p>Operating Hours</p>
          <br />
          <p>Mon - Fri: 8am - 8pm</p>
          <p>Saturday: 9am - 7pm</p>
          <p>Sunday: 9am - 8pm</p>
          <br />
          <p>Follow us for cleaning tips</p>
        </section>

        <section className="flex gap-8 mt-[2rem]">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
            className="w-[1.2rem]"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
            className="w-[1.2rem]"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
            className="w-[1.2rem]"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3046/3046127.png"
            className="w-[1.2rem]"
          />
        </section>

        <section className="mt-[4rem] text-[1rem]">
          <p>Contact</p>
          <br />
          <p>The Cleanic</p>
          <p>500 Terry Francine Street</p>
          <p>San Francisco,CA 94158</p>
          <p>123-456-7890</p>
          <p>nfo@mysite.com</p>
          <br />
          <div>
            <p>Legal</p>
            <br />
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
          </div>
        </section>
      </div>

      <div className="bg-yellow-200 h-[23rem] hidden lg:flex items-start justify-center gap-[5rem] py-[4rem]">
        <section className="flex flex-col gap-[3.8rem]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15219/15219414.png"
              className="w-7 h-7"
            />
            <p className="text-[1.5rem]">The Cleanic</p>
          </div>

          <div>
            <button className="bg-black text-white w-[12rem] py-3 rounded-full text-[1.2rem]">
              Book Now
            </button>
          </div>
        </section>

        <section>
          <div className="text-[1.1rem]">
            <p>Legal</p>
            <br />
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
          </div>
        </section>

        <section>
          <div className="text-[1.1rem]">
            <p>Operating Hours</p>
            <br />
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>
            <br />
            <p>Follow us for cleaning tips</p>
            <section className="flex gap-8 mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
                className="w-[1.6rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                className="w-[1.6rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
                className="w-[1.6rem]"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3046/3046127.png"
                className="w-[1.5rem]"
              />
            </section>
          </div>
        </section>

        <section>
          <div className="text-[1.1rem]">
            <p>Contact</p>
            <br />
            <p>The Cleanic</p>
            <p>500 Terry Francine Street</p>
            <p>San Francisco,CA 94158</p>
            <p>123-456-7890</p>
            <p>nfo@mysite.com</p>
          </div>
        </section>
      </div>

      <div className="py-5 bg-yellow-50">
        <p className="text-center md:hidden">
          © 2035 by The Cleanic. Powered <br /> and secured by Wix
        </p>
        <p className="text-center hidden md:block">
          © 2035 by The Cleanic. Powered and secured by Wix
        </p>
      </div>
    </div>
  );
};

export default Footer;
