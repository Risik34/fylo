import Navbar from '../components/Navbar';
import illustrationIntro from '../assets/illustration-intro.png';

const Title = () => {
  return (
    <div className="px-8 text-center">
      <img src={illustrationIntro} />
      <h1 className="text-2xl font-raleway font-semibold my-2">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="justify-center items-center px-20 py-3 m-3 rounded-full bg-gradient-to-r from-cyan to-blue">
        Get started
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Title />
    </div>
  );
};

export default Home;
