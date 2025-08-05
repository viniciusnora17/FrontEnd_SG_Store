import React from 'react'
import './Container.css';
import imgHome1 from '../../src/section-home/img-home/img1.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome3 from '../../src/section-home/img-home/img3.png';
import imgHome4 from '../../src/section-home/img-home/img-4.png';

const Dropdown = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-9 min-h-[91dvh] container-cards">

              <h2 className="w-full text-center text-4xl">produtos</h2>


               <div className="h-[750px] w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 card">
               <img src={imgHome1} alt="" claassName="w-full object-cover rounded" />
               <div class="flex  justify-around">
                   <div class="text-card">
                       <p>vestido tule curto emma</p>
                       <p>R$ 159,00</p>
                       <p>R$ 151,00 no pix</p>
                       <p>3x de <b>R$ 159,00</b> sem juros</p>
                   </div>
                     <div className='container-btn'>
                        <button className='btn'>Comprar</button>
                    </div>
               </div>
            </div>

            <div className="h-[750px] w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 card">
               <img src={imgHome2} alt="" className="w-full object-cover rounded" />
               <div class="flex justify-around">
                   <div class="text-card">
                       <p>vestido tule curto emma</p>
                       <p>R$ 159,00</p>
                       <p>R$ 151,00 no pix</p>
                       <p>3x de <b>R$ 159,00</b> sem juros</p>
                   </div>
                     <div className='container-btn'>
                        <button className='btn'>Comprar</button>
                    </div>
               </div>
            </div>
            
            <div className="h-[750px] w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 card">
               <img src={imgHome3} alt="" className="w-full object-cover rounded" />
               <div class="flex  justify-around">
                   <div class="text-card">
                       <p>vestido tule curto emma</p>
                       <p>R$ 159,00</p>
                       <p>R$ 151,00 no pix</p>
                       <p>3x de <b>R$ 159,00</b> sem juros</p>
                   </div>
                     <div className='container-btn'>
                        <button className='btn'>Comprar</button>
                    </div>
               </div>
            </div>

            <div className="h-[750px] w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 card">
               <img src={imgHome4} alt="" className="w-full object-cover rounded" />
               <div class="flex  justify-around">
                   <div class="text-card">
                       <p>vestido tule curto emma</p>
                       <p>R$ 159,00</p>
                       <p>R$ 151,00 no pix</p>
                       <p>3x de <b>R$ 159,00</b> sem juros</p>
                   </div>
                     <div className='container-btn'>
                        <button className='btn'>Comprar</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Dropdown;
