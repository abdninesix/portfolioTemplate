import { TypeAnimation } from "react-type-animation"
import profilePic from "../assets/Hero.png"
import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {opacity:0, x:-100},
    visible: {opacity:1, x:0, transition:{duration:0.5, staggerChildren:0.5}}
}

const childVariants = {
    hidden: {opacity:0, x:-100},
    visible: {opacity:1, x:0, transition:{duration:0.8}}
}

const Hero = () => {
  return (
    <div className="pb-2 lg:mb-28">
        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start sm:space-x-4 p-4">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img
                    src={profilePic}
                    alt="Abd"
                    className="bg-indigo-800 rounded-full"
                    initial={{x:100, y:-50, opacity:0}}
                    animate={{x:0, y:0, opacity:1}}
                    transition={{duration:2, delay:1}}
                    width={650}
                    height={650}/>
                </div>
            </div>

            <div className="w-full lg:w-1/2 text-left">
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start mt-5">
                    <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                        <span>Hi ! I'm</span><br/><span className="text-indigo-800">Abdullah</span>
                    </motion.h2>

                    <motion.span variants={childVariants} className="bg-clip-text text-2xl lg:text-4xl tracking-tight">As a frontend developer,</motion.span>
                    <motion.h2 variants={childVariants} className="pb-2 text-2xl tracking-tighter lg:text-4xl text-indigo-800">
                        <span>I can work with</span><br/><TypeAnimation sequence={["React.js",1000,"Next.js",1000,"Vue.js",1000,"Framer motion",1000,"TailwindCSS",1000,"Figma",1000,"Wordpress",1000]} wrapper="span" speed={50} repeat={Infinity}/>
                    </motion.h2>
                    <motion.p variants={childVariants} className="py-6 text-xl leading-relaxed tracking-tighter lg:text-left">{HERO_CONTENT}</motion.p>
                    <motion.a variants={childVariants} href="/resume.pdf" target="_blank rel=noopener noreferrer" className="bg-indigo-800 rounded-full p-4 text-[15px] text-white mb-10">Check my resume</motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero