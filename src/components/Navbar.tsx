import logo from '../assets/logo.svg';
const Navbar=()=>{
  return(
  <div className="px-4 py-3 flex justify-between  ">
      <img src={logo} className='w-20' alt='fylo-logo'/>
      <div className='relative'>
        <ul className='space-x-3 flex'>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>


      </div>
    </div>
  )
}

export default Navbar;
