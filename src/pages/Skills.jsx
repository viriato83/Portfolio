import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiSpring } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import img from "../components/img/footer.jpg"
import {motion, stagger} from "framer-motion"
const Skills = () => {
// Variantes do container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  // Variantes de cada skill
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
    const Skills=[
        {icon:<FaHtml5 />,texto:"Html"},
        {icon:<FaCss3 />,texto:"Css"},
        {icon:<IoLogoJavascript />,texto:"Java Script"},
        {icon:<SiSpring />,texto:"Spring Boot"},
        {icon:<FaReact />,texto:"React"},
        {icon:<RiTailwindCssFill />,texto:"Tailwind"},
        {icon:<FaBootstrap />,texto:"Bootstrap"},
        {icon:<TbSql />,texto:"Sql"},
    ]
  return (
    <div id="skils" className='Skills flex-col  my-[100px] flex items-center justify-center sm:text-center '>
        {/* Texto */}
        <div className='flex flex-col ml-8'>
            <h1 className='text-3xl text-cyan-500  py-3 md:text-6xl'>Habilidades</h1>
            <p className='text-white max-w-3xl '>Não constituem todas minhas habilidades, mas são as principais e as que mais tenho prática e mais utilizo nos meus projectos.</p> 
        </div>
      {/* skils  */}
         <div className='mt-30 group'>
            <div className='flex gap-4 '>
                {/* for desktop */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex gap-4 md:flex max-md:hidden"
                    >
                    {Skills.map((skill, index) => (
                        <motion.div
                        key={index}
                        variants={skillVariants}
                        className="flex flex-col items-center group hover:-translate-y-3 transition-all duration-300"
                        >
                        {/* Ícone circular */}
                        <div className="skils flex items-center justify-center text-4xl border-4 rounded-full h-20 w-20 border-amber-500 text-white hover:text-cyan-500 bg-orange-600/30 relative -top-9">
                            {skill.icon}
                        </div>

                        {/* Texto retangular */}
                        <div className="w-20 h-30 border-l-4 border-r-4 border-b-4 border-amber-500 text-white text-sm font-medium text-center py-2 rounded-b-md absolute flex items-center justify-center hover:h-35 duration-500">
                            {skill.texto}
                        </div>
                        </motion.div>
                    ))}
                    </motion.section>

                   {/* for mobile */}
                   <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className=" grid grid-cols-4 gap-4 md:hidden max-md:grid overflow-hidden "
                    >
                    {Skills.map((skill, index) => (
                        <motion.div
                        key={index}
                        variants={skillVariants}
                        className="flex flex-col items-center group hover:-translate-y-3 transition-all duration-300"
                        >
                        {/* Ícone circular */}
                        <div className='flex items-center justify-center text-4xl border-t-4 border-l-4 border-r-4 rounded-t-full h-20 w-20 border-amber-500 text-white  bg-orange-600/30'>
                            {skill.icon}
                        </div>

                        {/* Texto retangular conectado */}
                        <div className='  w-20 h-10 border-l-4 border-r-4 border-b-4 border-amber-500 text-white text-sm font-medium text-center py-2 rounded-b-md  bg-orange-600/30 relative flex items-center justify-center  '>
                            {skill.texto}
                        </div>
  
                        </motion.div>
                    ))}
                    </motion.section>
            </div>
         </div> 
         {/* Footer */}
         <div className=' mt-20 h-20 w-full'>
             <img className=' h-20 w-full object-cover  group-hover:-translate-y-5  ' src={img}></img>
         </div>

    </div>
  )
}

export default Skills
