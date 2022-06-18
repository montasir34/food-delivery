
import delivery from '../images/img/delivery.png'
import hero from '../images/img/heroBg.png'
import chocolate from '../images/img/i1.png'
import strawbery from '../images/img/f1.png'
import checkin from '../images/img/c3.png'
import fish from '../images/img/fi1.png'
import {motion} from 'framer-motion'
import {GoChevronLeft} from 'react-icons/go'
import {GoChevronRight} from 'react-icons/go' 
import {GiBasket} from 'react-icons/gi'
import {setProducts} from '../features/productSlice'
import React from 'react'


function Home() {

  function left(){
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const right = ()=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }



 
    const heroOption =(img, name, price,describe)=>{
        return(
            <div className='shadow-xl backdrop-blur-md bg-white/30 p-1 h-[150px] mt-5 flex flex-col items-center rounded-3xl'>
                 <img className='relative h-32 w-auto md:w-auto md:h-auto -top-20 ' src={img} alt="" />
                 <div className='relative -top-20 flex flex-col items-center'>
                 <h1 className='font-bold'>{name}</h1>
                 <p className='text-gray-500'>{describe}</p>
                 <p className='font-bold'><span className='text-red-600'>$</span>{price}</p>
                 </div>
            </div>  
        )  
     
    }
    



  return (
    <div>
      <section id='home' className="grid grid-cols-1 md:grid-cols-2  md:gap-3 container mx-auto w-full">
      <div className="span-col-1  flex flex-col gap-y-3 p-2">
        <div className="flex p-2 w-44 rounded-full justify-center items-center  gap-x-2   bg-orange-200">
          <span className='text-orange-600 font-bold font-[fira sans]'>Bike Delivery </span>
            <div className=' object-contain p-1  rounded-full bg-white '>
              <img className='w-7 h-7' src={delivery} alt="" />
            </div>
          </div>
          <div className=' flex flex-col md:items-start items-center justify-center md:text-left text-center gap-y-4 '>
            <h1 className='lg:text-[5rem] text-[4rem] text-left text-gray-800 font-[fira sans] font-bold'>Fastest Delivery In <span className='text-orange-600'>Your City</span></h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum hic unde accusamus totam nihil laudantium sunt facere quo dolorem, similique nisi maiores eveniet necessitatibus suscipit corrupti fuga </p>
            <button className='md:px-4 text-white font-bold md:justify-start py-2 md:w-[8rem] mt-2 w-full bg-orange-600 rounded-md'>Order Now</button>
          </div>
        </div>
      <div className="flex  span-col-1 p-2">
         <div className="md:relative absolute top-[770px] left-10 right-10 md:right-0 grid grid-cols-2 md:top-6 md:left-48 gap-y-24 gap-x-5   md:h-[400px] md:w-[400px]">
           {heroOption(chocolate,'Ic Cream', 5.3, 'chocolate & vanila')}
           {heroOption(strawbery,'strawberries', 8.4, 'fresh strawberries')}
           {heroOption(fish,'Fish Kebab', 8.4, 'mixed fish kebab')}
           {heroOption(checkin,'Checkin kebab', 8.4, 'mixed kebab plate')}
         </div>
         <img className='md:w-1/2 w-screen md:justify-self-end' src={hero} alt="" />
      </div>
  
    </section>
    <section className='w-full my-6'>
      <div className='w-full container mx-auto flex items-center justify-between'>
        <p className="text-2xl font-semibold capitalize text-gray-800 relative before:absolute before:rounded-lg before:content before:w-32 before:h-3 
        before:-bottom-4  before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-150">
          our fresh && healthy fruits
        </p>
        <div className='hidden md:flex gap-3 items-center'>
          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg cursor-pointer bg-orange-400 hover:bg-orange-500 flex items-center justify-center'>
          <GoChevronLeft onClick={left} className='text-white text-xl' />
          </motion.div>
          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg cursor-pointer bg-orange-400 hover:bg-orange-500 flex items-center justify-center'>
            <GoChevronRight onClick={right} className='text-white text-xl' />
          </motion.div>
        </div>
      </div>
     </section>
        <div  id='slider' className='overflow-x-scroll scroll-smooth w-screen'>
          <div  className='w-[4000px] gap-x-10 bg-gradient-to-tr mt-14 from-transparent via-orange-200  p-14 to-transparent   flex'>

      
     
          

          </div>
        </div>
    </div>
  )
}

export default Home
