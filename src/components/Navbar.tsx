import logo from '/src/assets/logo.svg';
const Navbar = () => {
  return (
    <div className="px-6 py-3 flex justify-between fixed bg-bg w-full bg-opacity-90 ">
      <img src={logo} className="w-20" alt="fylo-logo" />
      <div className="relative">
        <ul className="space-x-5 flex" cursor-pointer>
          {[
            { title: 'Features', id: 'features' },
            { title: 'Team', id: 'testimonials' },
            { title: 'Sign Up', id: 'signup' },
          ].map((navlink) => (
            <li>
              <a
                href={`#${navlink.id}`}
                className="text-gray-300 hover:text-white"
              >
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
