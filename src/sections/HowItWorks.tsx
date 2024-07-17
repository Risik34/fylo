import illustration from '/src/assets/illustration-stay-productive.png';
import arrow from '/src/assets/icon-arrow.svg';
const HowItWorks = () => {
  return (
    <section className="  grid md:grid-cols-2 gap-10">
      <img src={illustration} alt="stay-productive" />
      <div className="md:mt-16 space-y-4">
        <h2 className="text-2xl md:text-3xl font-raleway font-semibold">
          Stay productive, wherever you are
        </h2>
        <p className="text-gray-300">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-gray-300">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.{' '}
        </p>
        <p className="text-lg underline text-cyan  inline-block ">
          <a>
            See how it works
            <img src={arrow} className="inline ml-2" alt="arrow" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
