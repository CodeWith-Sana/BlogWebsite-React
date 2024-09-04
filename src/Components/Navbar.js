import React from 'react'
import {Link} from 'react-router-dom';
// import Blog from '../Assets/Blog.png';
import Logo from '../Assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Financeebook from '../Assets/Financeebook.pdf'
 const Navbar = () => {
  return (
    <div>
      <nav className=' bg-black text-white  flex flex-wrap justify-between items-center md:32 lg:48 '>
       <Link to='/' className='flex-1'>
        <img className = 'inline sm:h-20 sm:w-120'src={Logo} alt='logo'width ={170} height ={50} />
       </Link>
       <ul className='text-center -mx-5 md:mx-0 order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0'>
        <li className='inline-block mx-5'><Link to='/'>Home</Link></li>
        <li className='inline-block mx-5'><Link to='/About'>About</Link></li> 
        <li className='inline-block mx-5'><Link to='/Contact'>Contact</Link></li>
        <li className='inline-block mx-5'><Link to='/Postblog'>Postblog</Link></li> 
        <li  className='inline-block mx-5'><Link to='/Readblogs'>Readblogs</Link></li>
        
       </ul>
       <Link to={Financeebook} target='blank'>
       <button className='rounded-full bg-green-700 text-white md:w-32 lg:w-48 m-4 mr-4 p-1 '>
     Download Pdf
       </button>
      </Link>
       <li className='inline-block mx-5 '><FontAwesomeIcon icon={faBars} size='lg' style={{color: "#ffffff",}} /></li>
      </nav>
    </div>
  )
}
export default Navbar;
