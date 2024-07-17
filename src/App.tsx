import Hero from './sections/Hero';
import Feature from './sections/Feature';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import SignUp from './sections/SignUp';
import Footer from './sections/Footer';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="bg-bg text-white ">
      <Navbar />
      <div className="px-10 py-20 md:px-20">
        <Hero />
        <Feature />
      </div>
      <div className="px-10 space-y-20">
        <HowItWorks />
        <Testimonials />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
};

export default App;
