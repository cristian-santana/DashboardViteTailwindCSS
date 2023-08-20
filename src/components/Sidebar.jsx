import React, {useState} from 'react'
//Icons
import { RiFileCopyLine, RiHome3Fill, RiWalletLine, RiPieChartLine, RiMore2Fill, RiCloseFill } from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <>
    <div className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[60%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
      <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
        <img src='https://img.freepik.com/fotos-premium/joven-morena-barba-vestido-camiseta-blanca_152404-8031.jpg' className='w-20 h-20 object-cover rounded-full ring-2 ring-gray-300'/>
        <h1 className='text-xl text-white font-bold'>Jorge Luis Trejo</h1>
        <p className='bg-primary-300 py-2 px-4 rounded-full text-white'>Pro Level</p>
      </div>
      {/* NAV */}
       <div className='bg-primary-600 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between'>
       <nav className='flex flex-col gap-5' > 
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><RiHome3Fill /> Home </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><RiFileCopyLine /> Proyects </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><RiWalletLine /> Invoices </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><RiPieChartLine  /> Reports </a>
        </nav>
        <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
          <p className='text-gray-400'>Having troubles?</p>
          <a href='#'> Contact Us</a>
        </div>
       </div>
      </div>
      {/* Button mobile */}
      <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50' >
         {showMenu ?<RiCloseFill/> : <RiMore2Fill/> }</button>
   </>
  )
}

export default Sidebar;