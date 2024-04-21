import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const textVariants = {
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
            x: 50, // Start from 50 pixels to the left for text
            opacity: 0
        }
    };

    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return(
        <div name="contact" className='w-full h-screen bg-white flex justify-center items-center p-4'>
            <motion.form ref={ref} inital="hidden" animate={inView ? "visible" : "hidden"} method="POST" action="https://getform.io/f/pbnvkkxb" className='flex flex-col max-w-[600px] w-full'>
                <motion.div custom={0} variants={textVariants} className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] text-[#000300]'>Contact</p>
                    <p className='text-gray-600 py-4'>// Submit the form below or shoot me an email - sp180@rice.edu</p>
                </motion.div>
                <motion.input custom={1} variants={textVariants} required className='p-2 bg-[#F4F4F4]' type="text" placeholder="Name" name='name' />
                <motion.input custom={2} variants={textVariants} required className='my-4 p-2 bg-[#F4F4F4]' type="email" placeholder="Email" name='email' />
                <motion.textarea custom={3} variants={textVariants} required className='p-2 bg-[#F4F4F4]' placeholder="Message" name="message" rows="10"></motion.textarea>
                <motion.button custom={0} variants={textVariants} className='text-[#000300] border-2 border-[#000300] hover:scale-110 hover:bg-[#00df9a] hover:border-[#00df9a] duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</motion.button>
            </motion.form>
        </div>
    )
}

export default Contact