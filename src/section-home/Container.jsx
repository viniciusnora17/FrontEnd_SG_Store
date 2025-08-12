import React from 'react'
import './Container.css';
import imgHome1 from '../../src/section-home/img-home/img1.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome3 from '../../src/section-home/img-home/img3.png';
import imgHome4 from '../../src/section-home/img-home/img-4.png';

const Container = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[95dvh] container-cards px-4">
            <h2 className="w-full text-center products mb-12">novidades</h2>

            <div className="flex flex-wrap justify-center gap-3 w-full max-w-full">
                
                {/* Card 1 */}
                <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
                    <img className="w-full object-cover" src={imgHome1} alt="Vestido Baggy Legl" />
                    <div className='p-2'>
                        <p className="">vestido baggy legl</p>
                        <p className="">R$ 359,90</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
                    <img className="w-full object-cover" src={imgHome2} alt="Vestido Baggy Legl" />
                    <p className="">vestido baggy legl</p>
                    <p className="">R$ 359,90</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
                    <img className="w-full object-cover" src={imgHome3} alt="Vestido Baggy Legl" />
                    <p className="">vestido baggy legl</p>
                    <p className="">R$ 359,90</p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
                    <img className="w-full object-cover" src={imgHome4} alt="Vestido Baggy Legl" />
                    <p className="">vestido baggy legl</p>
                    <p className="">R$ 359,90</p>
                </div>
                
            </div>

            <button className='btn'>ver mais</button>
        </div>
    );
};

export default Container;
