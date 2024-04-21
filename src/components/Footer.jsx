import React, { useState } from 'react';
import SathyaLogo from '../assets/Sathya Logo.png'
import { 
    FaLinkedin,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Modal from './Modal.jsx'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const variants = {
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 }
    }

    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return (
        <>
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
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <div className='w-full h-16'><img className='h-full' src={SathyaLogo} /></div>
                <p className='py-4'>
                  Thanks for checking out the website!
                </p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <a className='hover:scale-110 hover:text-[#00df9a] duration-500' href="https://www.linkedin.com/in/sathya-padmanabhan/">
                        <FaLinkedin size={30} />
                    </a>
                    <a className='hover:scale-110 hover:text-[#00df9a] duration-500' href="https://www.instagram.com/sathya_padmanabhan/">
                        <FaInstagram size={30} />
                    </a>
                    <a className='hover:scale-110 hover:text-[#00df9a] duration-500' href="mailto:sp180@rice.edu">
                        <HiOutlineMail size={30} />
                    </a>
                    <button className='hover:scale-110 hover:text-[#00df9a] duration-500' onClick={toggleModal}>
                        <BsFillPersonLinesFill size={30} />
                    </button>
                    <a className='hover:scale-110 hover:text-[#00df9a] duration-500' href="https://github.com/TheSacredJump">
                        <FaGithubSquare size={30} />
                    </a>
                </div>
            </div>
            <div className='lg:col-span-1 flex lg:justify-end mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Menu</h6>
                    <ul>
                        <li className='hover:scale-110 hover:cursor-pointer hover:text-[#00df9a] duration-500 py-2 text-sm'>
                            <Link to="home" smooth={true} duration={500} >
                                Home
                            </Link>
                        </li>
                        <li className='hover:scale-110 hover:cursor-pointer hover:text-[#00df9a] duration-500 py-2 text-sm'>
                            <Link to="about" smooth={true} duration={500} >
                                About
                            </Link>
                        </li>
                        <li className='hover:scale-110 hover:cursor-pointer hover:text-[#00df9a] duration-500 py-2 text-sm'>
                            <Link to="projects" smooth={true} duration={500} >
                                Projects
                            </Link>
                        </li>
                        <li className='hover:scale-110 hover:cursor-pointer hover:text-[#00df9a] duration-500 py-2 text-sm'>
                            <Link to="contact" smooth={true} duration={500} >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Footer