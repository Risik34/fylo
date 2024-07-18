import {illustrationIntro} from '../assets';
const Hero = () => {
  return (
    <>
      <div className=" text-center space-y-8 ">
        <img src={illustrationIntro} className=" mx-auto" />
        <h1 className="text-2xl font-raleway font-semibold leading-relaxed">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-gray-300 font-opensans">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="justify-center items-center sm:w-3/4 py-3 rounded-full bg-gradient-to-r from-cyan to-blue">
          Get started
        </button>
      </div>
    </>
  );
};

export default Hero;
