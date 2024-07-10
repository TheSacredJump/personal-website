import React from 'react'
import HorizonBanking from '../assets/Horizon.png'
import StockFin from '../assets/StockFin.png'
import CardioCrew from '../assets/CardioCrew.png'
import Research from '../assets/Research.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
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
    
    const cardVariants = {
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2, // Staggered delay, multiply index by 0.2 seconds
                type: "spring",
                stiffness: 100
            }
        }),
        hidden: {
            y: 50, // Start from 50 pixels to the bottom for text
            opacity: 0
        }
    };
      
    const [ref, inView] = useInView({ once: true, threshold: 0.5 });

    return(
        <div name='projects' className='w-full md:h-screen text-gray-300'>
            <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div ref={ref} intial="hidden" animate={inView ? "visible" : "hidden"} variants={variantSlideIn} className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00df9a]'>Projects</p>
                    <p className='py-6 '>// Check out some of my recent projects</p>
                </motion.div>
            

                <motion.div ref={ref} intial="hidden" animate={inView ? "visible" : "hidden"} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <motion.div custom={0} variants={cardVariants} style={{backgroundImage: `url(${HorizonBanking})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Horizon: Banking Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://bankingapp-orpin.vercel.app/sign-in">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/TheSacredJump/bankingapp">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div custom={1} variants={cardVariants} style={{backgroundImage: `url(${StockFin})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                StockFin: AI Financial Advisor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://stockfin.net/">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Website</button>
                                </a>
                                <a href="https://github.com/jwaguirr/stockfin">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div custom={2} variants={cardVariants} style={{backgroundImage: `url(${CardioCrew})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                CardioCrew: RiceApps Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://drive.google.com/file/d/1RG0fSzqHzuvLknbj7n5E3giEdXucdaar/view?resourcekey">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Demo Video</button>
                                </a>
                                <a href="https://github.com/rice-apps/thi-walk30">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div custom={3} variants={cardVariants} style={{backgroundImage: `url(${Research})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Computational Bio Research
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.jneurolab.org/">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Lab Website</button>
                                </a>
                                <a href="https://www.researchsquare.com/article/rs-3501127/v1">
                                    <button className='hover:scale-110 duration-500 rounded-lg text-center px-4 py-3 m-2 bg-white text-[#000300] font-bold text-lg'>Research Paper</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects