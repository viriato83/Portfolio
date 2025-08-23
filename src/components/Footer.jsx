import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center py-5 text-amber-50 bg-orange-950/30 border-t-4 border-black/30'>

            <div className=" flex items-center justify-center flex-col">
            <p>&copy; 2025, Todos os direitos reservados.</p>

            <a href="mailto:mubaiviriato@gmail.com" className="footer-link">
                <h5 size={16} className="inline-icon" /> Email: viriatobonifa22@gmail.com
            </a>
        
            <a target="_blank" href="tel:+258873465311" className="footer-link">
                <h5 size={16} className="inline-icon" /> Cell: +258873465311
            </a>
            </div>

    </div>
  )
}

export default Footer
