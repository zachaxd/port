import React , {useState} from 'react'
import Logo from '../assets/logo2.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMailBulk, FaFile} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 backdrop-blur-md border-b border-gray-800 text-gray-300'>
        {/* <div className='fixed mt-14 w-full -ml-4 h-[1px] bg-gradient-to-r from-indigo-500 to-pink-500 background-animate'></div> */}
        <div>
    <img src={Logo} alt="" style={{width: '60px'}}/>
        </div>

        {/* menu */}
            <ul className='hidden text-xs font-bold md:flex'>
                <li className='hover:text-pink-500'>Home</li>
                <li className='hover:text-pink-500'>About</li>
                <li className='hover:text-pink-500'>Skills</li>
                <li className='hover:text-pink-500'>Work</li>
                <li className='hover:text-pink-500'>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[100%] justify-between left-0'>
            <ul>
                <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md bg-gray-800/40'>
                    
                    <a className='flex justify-between items-center w-full text-gray-300' href="">
                        <p className='text-xs'>Let's connect!</p> <FaLinkedin size={20} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-gray-800/90 rounded-md bg-gray-800/40'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-gray-800/90 rounded-md bg-gray-800/40'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-gray-800/90 rounded-md bg-gray-800/40'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar