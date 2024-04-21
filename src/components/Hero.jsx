import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const variants = {
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 }
    }

    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} name="home" className='text-white'>
            <div className='animate-fadeUp max-w-[1100px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center z-0'>
                <p className='text-[#00df9a] font-bold p-2'>NICE TO MEET YOU 👋</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>My name is <p className='inline hover:underline decoration-[#00df9a] hover:underline-offset-auto'>Sathya.</p></h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I love </p>
                    <ReactTyped className='text-[#00df9a] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['Full Stack Development', 'Machine Learning', 'Fintech', 'Space', 'Startups', 'Speedcubing']}
                    typeSpeed={80} 
                    backSpeed={100} 
                    loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Let's get in touch and build something together.</p>
                <Link to="about" smooth={true} duration={500}><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-110 duration-500'>
                    About Me
                </button></Link>
            </div>
        </motion.div>
    )
}

export default Hero