import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import SathyaLogo from '../assets/Sathya Logo.png'
import Modal from './Modal.jsx'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const handleClick = () => setNav(!nav)

    const handleNav = () => {
        setNav(!nav)
    }

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const variants = {
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.15, // Staggered delay, multiply index by 0.2 seconds
                type: "spring",
                stiffness: 100
            }
        }),
        hidden: {
            x: -50, // Start from 50 pixels to the left for text
            opacity: 0
        }
    };

    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return(
        <div className='bg-[#000300] flex justify-between items-center h-24 w-full max-w-[1240px] mx-auto px-4 text-white'>
            <div className='w-full h-16'><img className='h-full' src={SathyaLogo} /></div>
            <ul className='md:flex hidden'>
                <li className='p-4 hover:cursor-pointer hover:scale-110 hover:text-[#00df9a] duration-500'>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='p-4 hover:cursor-pointer hover:scale-110 hover:text-[#00df9a] duration-500'>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='p-4 hover:cursor-pointer hover:scale-110 hover:text-[#00df9a] duration-500'>
                    <Link to="projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className='p-4 hover:cursor-pointer hover:scale-110 hover:text-[#00df9a] duration-500'>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 h-full' : 'fixed left-[-100%]'}>
                <div className='w-full h-16'><img className='h-full' src={SathyaLogo} /></div>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li onClick={handleClick} className='p-4 border-b border-gray-600'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className='p-4'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li> 
            </ul>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                {/* Modal Content */}
                <div className="p-4">
                    <h2 className="text-lg font-bold">My Resume</h2>
                    <iframe
                        src="/Sathya_P_Resume (2).pdf"
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            </Modal>
            <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className='hidden lg:flex absolute flex-col top-[35%] left-0'>
                <motion.ul custom={0} variants={variants}>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a href="https://www.linkedin.com/in/sathya-padmanabhan/" className='flex justify-between items-center w-full text-gray-300 '>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                </motion.ul>
                <motion.ul custom={1} variants={variants}>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000300]'>
                        <a href="https://github.com/TheSacredJump" className='flex justify-between items-center w-full text-gray-300 '>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </motion.ul>
                <motion.ul custom={2} variants={variants}>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00df9a]'>
                        <a href="mailto:sp180@rice.edu" className='flex justify-between items-center w-full text-[#000300] '>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </motion.ul>
                <motion.ul custom={3} variants={variants}>
                    <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300'>
                        <button onClick={toggleModal} className='flex justify-between items-center w-full text-[#000300]'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </button>
                    </li>
                </motion.ul>
            </motion.div>
        </div>
    )
}

export default Navbar