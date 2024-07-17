import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  return (
    <section id="signup">
      <form
        className="p-6 text-center space-y-6 bg-testimonialsbg"
        onSubmit={(e) => {
          e.preventDefault();
          setEmail('');
        }}
      >
        <h1 className="font-raleway font-bold text-xl ">
          Get early access today
        </h1>

        <p className="font-opensans text-gray-300 w-full">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="md:flex flex-row space-y-6 md:space-y-0 ">
          <input
            type="email"
            placeholder="email@domain.com"
            className="px-8 py-4 bg-white text-gray-800 rounded-full w-full md:w-3/4 md:rounded-r-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="px-8 py-3 md:py-4 bg-gradient-to-r from-cyan to-blue text-white text-lg font-semibold font-raleway w-full rounded-full md:rounded-l-none w-full  md:w-1/4">
            Get started for free
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
