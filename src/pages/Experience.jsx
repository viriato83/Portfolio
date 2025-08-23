import React from "react";
import img from "../components/img/gif.gif";
import {motion} from "framer-motion"
const projetos = [
  {
    nome: "Sistema de Gestão Comercial",
    descricao:
      "Sistema completo para controlar vendas, estoque e clientes, feito com Spring Boot e React.",
    tecnologias: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    nome: "Site Institucional Moderno",
    descricao: "Website responsivo para empresa de serviços, usando Tailwind e React.",
    tecnologias: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    nome: "Dashboard Interativo",
    descricao: "Dashboard com gráficos e análises em tempo real para negócios.",
    tecnologias: ["React", "Chart.js", "API REST"],
  },
];

const timeline = [
  { ano: "2023", evento: "Início da carreira profissional como desenvolvedor full stack" },
  { ano: "2024", evento: "Desenvolvimento de sistemas comerciais para clientes locais" },
  { ano: "2025", evento: "Lançamento do sistema multiusuário para pequenas empresas" },
];

const estatisticas = [
  { label: "Projetos Web", porcentagem: 70 },
  { label: "Sistemas Desktop", porcentagem: 20 },
  { label: "Projetos Pessoais", porcentagem: 10 },
];

const Experience = () => {
  return (
    <div id="experiencia" className="flex flex-col items-center justify-center mb-20 px-6 max-w-6xl mx-auto">
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-500 py-6">Experiência</h1>

      {/* Timeline */}
      <section className="w-full mb-12">
        <h2 className="text-2xl text-orange-500 font-semibold mb-6 text-center">
          Linha do Tempo
        </h2>
        <ul className="border-l-4 border-orange-500 ml-4">
          {timeline.map(({ ano, evento }) => (
           <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false,amount:0.7 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{duration:0.6}}
           
           >
             <li  className="mb-6 ml-6 relative">
              <span className="absolute -left-8 top-0 bg-orange-500 rounded-full w-6 h-6"></span>
              <time className="font-bold text-cyan-400 text-xl">{ano}</time>
              <p className="text-amber-50/80 mt-1 max-w-xl">{evento}</p>
            </li>
           </motion.section>
          ))}
        </ul>
      </section>

      {/* Projetos em Destaque */}
      <section className="w-full mb-12">
        <h2 className="text-2xl text-orange-500 font-semibold mb-6 text-center">
          Projetos em Destaque
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map(({ nome, descricao, tecnologias }) => (
             <motion.section
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false,amount:0.7 }}
             variants={{
               hidden: { opacity: 0, y:40 },
               visible: { opacity: 1, y: 0 },
             }}
             transition={{duration:0.6}}  className="bg-orange-500/40 border-2 border-orange-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              
            
                    <h3 className="text-cyan-400 text-xl font-bold mb-3">{nome}</h3>
                    <p className="text-amber-50/80 mb-4">{descricao}</p>
                    <div className="flex flex-wrap gap-2">
                      {tecnologias.map((tech) => (
                        <span
                     
                          className="bg-cyan-700 px-3 py-1 rounded-full text-sm text-amber-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
              
         </motion.section>
          ))}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="w-full mb-12">
        <h2 className="text-2xl text-orange-500 font-semibold mb-6 text-center">
          Estatísticas
        </h2>
        <div className="max-w-xl mx-auto space-y-6">
          {estatisticas.map(({ label, porcentagem }) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span className="text-amber-50/80 font-semibold">{label}</span>
                <span className="text-amber-50/80">{porcentagem}%</span>
              </div>
              <div className="w-full bg-cyan-900 rounded-full h-4">
                <div
                  className="bg-orange-500 h-4 rounded-full"
                  style={{ width: `${porcentagem}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Imagem + texto final */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={img}
          alt="Gif representando experiência"
          className="rounded-2xl w-72 md:w-96 shadow-lg"
        />
        <p className="max-w-lg text-amber-50/70 text-justify">
          Durante esses anos, desenvolvi projetos diversos, desde websites institucionais
          até sistemas complexos para gestão empresarial. Minha jornada é marcada por
          aprendizado constante, desafios superados e a busca por soluções que agregam
          valor real aos negócios.
        </p>
      </section>

      {/* Call to action */}
      <section className="mt-16 text-center">
        <p className="text-amber-50/80 mb-4 text-lg">
          Gostou do meu trabalho? Vamos conversar!
        </p>
        <a
          href="mailto:seuemail@exemplo.com"
          className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          Contate-me
        </a>
      </section>
      <div className="w-full border-b-4 border-amber-50/30 mt-10"></div>
    </div>
  );
};

export default Experience;
