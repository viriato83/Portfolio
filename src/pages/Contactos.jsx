
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_o688i3i',    // Ex: service_xxxxxx
        'template_c0o583v',   // Ex: template_xxxxxx
        form.current,
        't2uo4Vi1pA83QXSjF'        // Ex: xxxxxxxxxxxx (public key)
      )
      .then((result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
          setAtivo(false)
      }, (error) => {
          alert("Erro ao enviar, tente novamente.");
          console.log(error.text);
      });
    }
    const [ativo,setAtivo]=useState(false)
  return (
    <>
  
     
          <div  id="contactos" className="flex items-center justify-center flex-col m-40 " >
            <h2 className="text-center mb-4 text-cyan-500 text-3xl">Entre em Contato</h2>
            <p className="text-center mb-5 text-amber-500 text-xl">
              Tem um projeto em mente ou dúvidas? Estamos prontos para ajudar!
            </p>

            <div className="flex  flex-col items-center gap-10">



              <div className="mb-4 flex  text-amber-50">
                <form className=" p-5 rounded-md border-2 border-amber-50/30 flex flex-col items-center "  ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 ">
                    <label className="form-label ">Nome:  </label>
                    <input type="text" name="name" className="bg-amber-50/10 rounded-md text-center ml-13 w-60" placeholder="Seu nome" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email: </label>
                         
                    <input type="email" name="email" className="bg-amber-50/10 rounded-md text-center ml-13 w-60" placeholder="Seu email" />
                  </div>
                  <div className="mb-3 flex justify-center items-center gap-5">
                    <label className="form-label">Mensagem: </label>
                    <textarea name="message" className="bg-amber-50/10 rounded-md text-center w-60" rows="4" placeholder="Escreva sua mensagem"></textarea>
                  </div>
                  <button type="submit" className="text-cyan-500 border-2 border-amber-500 w-100 rounded-2xl h-10 hover:bg-amber-500 bg-cyan-500/30 cursor-pointer transition-all duration-500"
                  onClick={()=>{
                       setAtivo(true)
                  }}
                  >
                    {ativo?"A Enviar...":"Enviar"}
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-content-center text-amber-50  ">
                <div className="info-box mb-4">
                  <h5 className='text-2xl text-orange-500'>📍Endereço</h5>
                  <p>Maputo, Moçambique</p>
                </div>
                <div className="info-box mb-4">
                <h5 className='text-2xl text-orange-500'>📩Email</h5>
                  <p>viriatobonifa22@gmail.com</p>
                </div>
                <div className="info-box mb-4">
                <h5 className='text-2xl text-orange-500'>📱WhatsApp</h5>
                  <p><a href="https://wa.me/258873465311" target="_blank" rel="noopener noreferrer">+258 873 465 311</a></p>
                </div>
              </div>
            </div>
          </div>
  
    </>
  );
}
