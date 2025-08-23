import React from 'react';
import img from "../components/img/banner_about.png"
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {
  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay }
    })
  };
  return (
    <div  id="about" className='flex justify-center gap-6 max-md:flex-col'>
      {/* texto */}
      <motion.section
       initial={{opacity:0,x:-100}}
       whileInView={{opacity:1,x:0,}}
       transition={{duration:0.7}}
       viewport={{ once: false, amount: 0.3 }}
      
      >
          <div className='flex items-start flex-col px-8 gap-5 text-white md:float-right'>
            <h1 className="text-cyan-500  text-3xl md:text-6xl">Sobre Mim</h1>
         
        
            <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="md:max-w-2xl text-justify"
    >
      <motion.p
        variants={paragraphVariant}
        custom={0}
      >
        Sou finalista do curso de Licenciatura em Engenharia Informática e de Telecomunicações pela Universidade Politécnica. 
        Atuo como desenvolvedor full stack, apaixonado por tecnologia, inovação e por tudo o que envolve o mundo da programação.
      </motion.p>

      <motion.p
        variants={paragraphVariant}
        custom={0.3} // Delay de 0.3s
        className="mt-4"
      >
        Tenho experiência no desenvolvimento de sistemas web completos, utilizando tecnologias como Spring Boot, React.js, MySQL 
        e boas práticas de segurança com JWT e bcrypt. Gosto de transformar ideias em soluções práticas, funcionais e com interfaces modernas.
      </motion.p>

      <motion.p
        variants={paragraphVariant}
        custom={0.6} // Delay de 0.6s
        className="mt-4"
      >
        Acredito que a tecnologia tem o poder de resolver problemas reais e gerar impacto positivo na sociedade. 
        Estou em constante aprendizado e busco evoluir a cada projeto que desenvolvo.
      </motion.p>

     <Link to='projectos'>
     <motion.button
        variants={paragraphVariant}
        custom={0.9} // Delay de 0.9s
        className="flex mb-[50px] border border-amber-500 py-2 mt-5 px-3 rounded-full hover:bg-cyan-500 transition-all duration-500"
      >
        Meus Projetos
      </motion.button>
     </Link>
    </motion.div>
     
     </div>
      </motion.section>
      <motion.section
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0,}}
            transition={{duration:0.7}}
            viewport={{ once: false, amount: 0.3 }}>
          <div className='flex'>
          <img src={img} className='ml-8 flex rounded-4xl h-58  md:h-[300px] mb-10  md:mt-20'>
            </img>
            {/* <div className=' sobra_azul bg-cyan-500 w-2 h-2 absolute  left-[70%] -bottom-[40%] -z-10 animate-pulse' >

              </div>
              <div className=' sobra_laranja bg-orange-500 w-2 h-2 absolute left-[60%] -bottom-[55%] -z-10 animate-pulse' >

          </div> */}
          
        </div>
     </motion.section>
    </div>
  )
}

export default About
