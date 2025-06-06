import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-indigo-900 pb-20">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-50}} transition={{duration: 0.5}} className="my-10 text-center text-6xl">Work with me</motion.h2>
        <div className="font-normal text-indigo-800 text-center tracking-tighter">
          {/*<motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="my-4">{CONTACT.address}</motion.p>*/}  
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="my-4">{CONTACT.email}</motion.p>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}} className="my-4">{CONTACT.phoneNo}</motion.p>
        </div>
    </div>
  )
}

export default Contact