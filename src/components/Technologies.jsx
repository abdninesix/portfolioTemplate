import { motion } from "framer-motion"
import { MdAnimation } from "react-icons/md"
import { PiFigmaLogoFill } from "react-icons/pi"
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiVuejsFill } from "react-icons/ri"

const iconVariants = (duration)=> ({
    initial: {y: -10}, animate: {y:[10, -10], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

export const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-6xl">Technologies</motion.h2>
        
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
          
            <motion.div initial="initial" animate="animate" variants={iconVariants(1)}>
                <RiReactjsFill className="text-7xl text-cyan-400"/> React.js
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                <RiNextjsFill className="text-7xl text-black"/> Next.js
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                <RiVuejsFill className="text-7xl text-teal-500"/> Vue.js
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                <RiTailwindCssFill className="text-7xl text-blue-400"/> Tailwind
            </motion.div>
            
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                <PiFigmaLogoFill className="text-7xl text-purple-700"/> Figma
            </motion.div>
            
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                <RiHtml5Fill className="text-7xl text-orange-600"/> HTML5
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariants(1)} className="p-4">
                <RiCss3Fill className="text-7xl text-blue-400"/> CSS3
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariants(1)} className="p-4">
                <RiJavascriptFill className="text-7xl text-yellow-400"/> Javascript
            </motion.div>

        </motion.div>
    </div>
  )
}
