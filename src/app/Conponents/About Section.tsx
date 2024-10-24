


import React from 'react'
import Heading from './Heading'
import { AiOutlineGift } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { TbPacman } from 'react-icons/tb'
import { IoLocation } from 'react-icons/io5'
import Button from './Button'


const AboutSection = () => {
  return (
 <section className='container mx-auto py-10 px-4'> 

<Heading title="About Me"/>

<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
    <div>
<img src="/M Essa.jpg" className='w-[400px] ' alt='Avater'/>
     </div>


     <div>
                    <div className='flex flex-1 items-center justify-between w-[450px]'>
                        <div className='flex flex-col gap-6  '> 


                            
                            <div className='flex gap-4 items-center font-medium'> 
                                <AiOutlineGift className='text-red-700 text-[22px]'/>
                                Birthday
                            </div>
                            


                            <div className='flex gap-4 items-center font-medium'> 
                                <FiBookOpen className='text-red-700 text-[22px]'/>
                                Study                                
                            </div>


                    

                            <div className='flex gap-4 items-center font-medium'>
                                <BsGlobe2 className='text-red-700 text-[22px]'/>
                                Website
                            </div>


                            <div className='flex gap-4 items-center font-medium'> 
                                <TbPacman className='text-red-700 text-[22px]'/>
                            Interest
                            </div>


                            <div className='flex gap-4 items-center font-medium'> 
                                <IoLocation className='text-red-700 text-[22px]'/>
                           Location
                            </div>
                        </div>



                        <div className='flex flex-col gap-6 text-gray-600'>
                            <div> :</div>
                            <div> :</div>
                            <div> :</div>
                            <div> :</div>
                            <div> :</div>
                        </div>
                     


                                
                        <div className='flex flex-col gap-6  text-gray-600'>
                        <div > 01.12.2002 </div>
                        <div> Governor Sindhi IT Initiative Karachi </div>
                        <div> www.essagadani.com </div>
                        <div> Web Development </div>
                        <div> Mirpur Mathelo, Ghotki, & Sukkur Sindh </div>
                        </div>
                        </div>


                        <div className='max-w-[800px] '> 
                            <h2 className='font-bold mt-16 mb-10'>This is Certified Cloud Applied Generative Artificial Intelligence (AI) Engineer (GenEng) Muhammad Essa Gadani</h2>
                            <p className='text-gray-600'>Hi! My name is Muhammad Essa Gadani. As a visionary Certified Cloud Applied Generative Artificial Intelligence (AI) Engineer (GenEng), I bridge the gap between technology and innovation. With a passion for harnessing AI's transformative power, I design, develop, and deploy cutting-edge cloud-based generative AI Web development.
                            </p>
                                

                                <Button link=" https://mailto:essagadaani036@gmail.com" text="Hair Me"/>
                                
                        </div>



                        </div>
     
                          </div>
                        
        
      
             

 </section>
  )
}

export default AboutSection