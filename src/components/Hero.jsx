import React from 'react'
import img from "../components/img/foto.png"
import { FaRegCircle } from 'react-icons/fa'
import { LuCircleDashed } from 'react-icons/lu'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    
    <div  id="home" className="max-sm:py-35 py-60 px-4 max-sm:w-full ">
   
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {/* Texto */}
        <motion.section
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0,}}
        transition={{duration:0.7}}
        viewport={{ once: false, amount: 0.3 }}
        >

        <div className="text-center md:text-left max-w-xl max-sm:text-[15px]">
          <h2 className="text-xl text-cyan-500 uppercase max-sm:text-[15px]">Desenvolvedor Full-Stack</h2>
          <h1 className="text-6xl font-bold text-orange-500 max-md:text-4xl max-sm:text-[25px]">
            Viriato Bonifácio Mubai
          </h1>
          <p className="text-white mt-4">
            Engenheiro Informático e de Telecomunicações <br />
            apaixonado pelo desenvolvimento web ou de software com 2 anos de experiência
          </p>
       
        </div>
        </motion.section>

        {/* Foto com moldura gradiente */}
      <motion.section
       initial={{opacity:0,x:100}}
       whileInView={{opacity:1,x:0,}}
       transition={{duration:0.7}}
       viewport={{ once: false, amount: 0.3 }}
      
      >
        <div className="  gradiente rounded-full relative w-[290px] h-[290px]  flex items-center justify-center max-sm:w-[200px]  max-sm:h-[200px]  ">
      
          <LuCircleDashed
              className="   absolute text-cyan-500 w-full h-full  animate-[spin_20s_linear_infinite]"
          />

          {/* Moldura com gradiente e imagem */}
            <div className="bg-gradient-to-tr from-orange-500 to-cyan-900 h-[255px] w-[255px] rounded-full flex items-center justify-center z-1 max-ms:h-[180px] max-sm:w-[180px] max-sm:h-[180px]  ">
                <img
                src={img}
                alt="Foto de Viriato"
                className="w-40 h-40 md:h-60 md:w-60 rounded-full object-cover border-4 border-[#ffecdb55] "
                />
            </div>
          </div>


      </motion.section>
      </div>
       {/* Shadow BackGround */}
       <div className=' sobra_azul bg-cyan-500 w-2 h-2 absolute -top-[10%] left-[70%] -z-10 animate-pulse' >

        </div>
       <div className=' sobra_laranja bg-orange-500 w-2 h-2 absolute top-[70%] -left-[1%] -z-10 animate-pulse' >

        </div>
        <footer className='hero_footer flex gap-15  justify-center text-2xl text-[#e27343] mt-20 border-y border-amber-600/20 py-3 max-sm:mt-60 max-sm:text-[15px] max-sm:gap-6 max-sm:w-full  '>
            <h2 >Multidisciplinar</h2>
            <h2>Criativo e Estratégico</h2>
            <h2>Responsável</h2>
        </footer>
    </div>
  )
}

export default Hero
