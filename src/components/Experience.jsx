import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="my-20 text-center text-6xl">My Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="w-full lg:w-[15rem]">
                        <p className="text-center top-[10px] mb-2 text-xl">{experience.year}</p>
                    </motion.div>
                    
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}} className="px-2 w-full lg:w-[50rem]">
                        <h3 className="mb-2 font-semibold text-2xl">{experience.role}</h3>
                        <span className="text-[1.5rem] text-indigo-800 font-normal">{experience.company}</span>
                        <p className="mb-4">{experience.description}</p>
                        {experience.technologies.map((tech,index)=>(
                            <span className="mr-4 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience