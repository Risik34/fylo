const SignUp = () => {
  return (
    <section className="p-10">
      <form className="p-10 text-center space-y-6 bg-testimonialsbg">
        <h1 className="font-raleway font-bold text-xl ">
          Get early access today
        </h1>

        <p className="font-opensans text-gray-300 ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <input
          type="email"
          placeholder="email@domain.com"
          className="px-8 py-4 bg-white text-gray-800 rounded-full w-full"
        />
        <button className="px-8 py-4 bg-gradient-to-r from-cyan to-blue text-white text-lg font-semibold font-raleway w-full rounded-full ">
          Get started for free
        </button>
      </form>
    </section>
  );
};

export default SignUp;
