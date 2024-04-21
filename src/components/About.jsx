import React from 'react';
import Me from '../assets/IMG_5649.jpg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const variants = {
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 }
    }

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

    const variantSlideIn = {
        visible: { 
            x: 0, // end position X (original position)
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 20,
                duration: 0.5 
            } 
        },
        hidden: { 
            x: -100, // start from 100 pixels to the right
            opacity: 0 
        }
      };
      
    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return(
        <div name="about" className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-5 xl:gap-0'>
                <motion.img ref={ref} inital="hidden" animate={inView ? "visible" : "hidden"} variants={variantSlideIn} className='w-[500px] mx-auto my-4' src={Me} alt='Picture of Sathya' />
                <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>WHO AM I?</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Sathya Padmanabhan</h1>
                    <motion.p custom={0} variants={textVariants} className='py-2'>
                     👋 Hey there! Thanks for checking out the website! 
                    </motion.p>
                    <motion.p custom={1} variants={textVariants} className='py-2'>
                     I'm an undergraduate at <p className='inline font-bold'>Rice University 🦉</p> majoring in 
                     <p className='inline font-bold'> Computer Science 💻</p> and minoring in <p className='inline font-bold'> Business 💼</p> and <p className='inline font-bold'> Financial Computation and Modeling</p>. 📈
                    </motion.p>
                    <motion.p custom={2} variants={textVariants} className='py-2'>
                     I'm from <p className='inline font-bold'>Chandler</p>, <p className='inline font-bold'>Arizona 🌵</p>, and I am super passionate <p className='inline font-bold'>software development 🖥️</p>, <p className='inline font-bold'>machine learning 🤖</p>, and <p className='inline font-bold'>fintech 📊</p>. 
                    </motion.p>
                    <motion.p custom={3} variants={textVariants} className='py-2'>
                     I also love <p className='inline font-bold'>startups 🚀</p> and <p className='inline font-bold'>entrepreneurship💡</p>, 
                     which is what I aim to pursue in the future.
                    </motion.p>
                    <motion.p custom={4} variants={textVariants} className='py-2'>
                     Outside of classes and coding, I love to <p className='inline font-bold'>speedcube 🕒</p>. I rank <p className='inline font-bold'>top 8% globally 🌎</p> and love to compete. 
                     I think it's a great way to have some fun (and it looks pretty cool too.)
                    </motion.p>
                    <motion.p custom={5} variants={textVariants} className='py-2'>
                        Other than that, I love space and occassionally go <p className='inline font-bold'>stargazing 🌠</p> when the skies are clear. 
                        I also play <p className='inline font-bold'>soccer ⚽</p> and <p className='inline font-bold'>squash 🌑</p> (casually) and <p className='inline font-bold'>read 📖</p> a bit in my free time.
                    </motion.p>
                    <Link to="projects" smooth={true} duration={500} ><motion.button custom={0} variants={textVariants} className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:scale-110 duration-500'>
                        Projects
                    </motion.button></Link>
                </motion.div>
            </div>
        </div>
    )
}

export default About