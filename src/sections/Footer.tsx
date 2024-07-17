import logo from '/src/assets/logo.svg';
import emailIcon from '/src/assets/icon-email.svg';
import phoneIcon from '/src/assets/icon-phone.svg';
import locationIcon from '/src/assets/icon-location.svg';
const Footer = () => {
  return (
    <section id="footer" className="pb-10">
      <img src={logo} />
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between my-8 space-y-6 md:space-y-0">
        <div>
          <div className=" grid md:grid-cols-3 gap-5 md:gap-3">
            <div className="flex md:col-span-2 md:row-span-2">
              <img src={locationIcon} className="w-4 h-5 relative top-1 mr-3" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt
                  <br /> ut labore et dolore magna aliqua
                </p>
              </div>
            </div>

            <div className="flex">
              <img src={phoneIcon} className="size-4 relative top-1 mr-3 " />
              <div>
                <p>+1-543-123-4567</p>
              </div>
            </div>

            <div className="flex">
              <img src={emailIcon} className="size-4 relative top-1 mr-3 " />
              <div>
                <p>example@fylo.com</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="space-y-2 text-md font-opensans text-gray-300">
          <li className="text-lg text-white">About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="space-y-3 text-md font-opensans text-gray-300">
          <li className="text-lg text-white">Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
