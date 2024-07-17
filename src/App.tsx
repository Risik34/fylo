import Hero from './sections/Hero';
import Feature from './sections/Feature';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import SignUp from './sections/SignUp';
import Footer from './sections/Footer';
const App = () => {
  return (
    <div className="bg-bg text-white">
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
