
import delivery from '../images/img/delivery.png'
import hero from '../images/img/heroBg.png'
import chocolate from '../images/img/i1.png'
import strawbery from '../images/img/f1.png'
import checkinImg from '../images/img/c3.png'
import fishImg from '../images/img/fi1.png'
import notfound from '../images/img/NotFound.svg'
import {motion} from 'framer-motion'
import {GoChevronLeft} from 'react-icons/go'
import {GoChevronRight} from 'react-icons/go' 
import {GiBasket} from 'react-icons/gi'
import {BsCurrencyDollar} from 'react-icons/bs'
import {MdOutlineFastfood} from 'react-icons/md'
import React from 'react'
import { getData } from '../firebase'
import { productSelector } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import {category} from '../data'
import { setData } from '../features/cartSlice'
function Home() {
  const dispatch = useDispatch()
  const products = useSelector(productSelector)
  const [filter, setFilter] = React.useState('checkin')

  const data = products?.filter((n)=> n.category === filter)

  const fruitMenu = products.map(it => (
    it.category === 'fruits' &&
      <div 
      className='rounded-lg w-48 hover:drop-shadow-xl flex flex-col justify-center items-center h-48 relative bg-white/50  backdrop-blur-md'
      key={it.id}>
        <motion.img whileHover={{scale : 1.1}} className='absolute h-32 -top-20' src={it.image} alt="" />
        <motion.div whileTap={{scale : 0.8}} onClick={() => handleSet(it)} className='p-2 rounded-full absolute top-16  bg-red-500 hover:bg-red-700 text-white'>
          <GiBasket className='text-2xl' /></motion.div>
          <div className='text-center flex flex-col items-center mt-28'>
            <h1 className='font-[stoke] font-extrabold text-lg text-gray-600'>{it.title}</h1>
            <h1 className='font-bold text-gray-500 font-mono'>{it.colaries}</h1>
            <div className='flex items-center mr-2'><BsCurrencyDollar className='text-red-700' />  <h1 className='font-semibold text-gray-700'>{it.price}</h1></div>
            
          </div>
      </div>
  ))



  function left(){ 
    const slider = document.getElementById('slider').scrollLeft -= 500
  }
  const right = ()=>{
    const slider = document.getElementById('slider').scrollLeft += 500
  }

 
    




      React.useEffect(()=>{
         getData(dispatch)
      }, [])
 
    const heroOption =(img, name, price,describe)=>{
        return(
            <div className='hover:shadow-xl h-36 backdrop-blur-md bg-white/30 p-1 md:w-32
            md:h-[150px] mt-5 flex flex-col justify-center items-center rounded-xl md:rounded-3xl'>
                 <img className='relative h-28 w-auto md:w-auto md:h-auto -top-10 ' src={img} alt="" />
                 <div className='relative -top-8 flex justify-center  flex-col items-center'>
                 <h1 className='font-bold font-[poppins]'>{name}</h1>
                 <p className='text-gray-500 text-xs md:text-md '>{describe}</p>
                 <p className='font-bold'><span className='text-red-600'>$</span>{price}</p>
                 </div>
            </div>  
        )  
     
    }
    


    function handleSet(e){
      dispatch(setData(e))
    }

  return (
    <div>
      <section id='home' className="grid grid-cols-1 md:grid-cols-2  md:gap-3 container mx-auto w-full">
      <div className="span-col-1  flex flex-col gap-y-3 p-2">
        <div className="flex p-2 w-44 rounded-full justify-center items-center  gap-x-2   bg-orange-200">
          <span className='text-orange-600 font-bold font-[Quantico]'>Bike Delivery </span>
            <div className=' object-contain p-1  rounded-full bg-white '>
              <img className='w-7 h-7' src={delivery} alt="" />
            </div>
          </div>
          <div className=' flex flex-col md:items-start items-center justify-center md:text-left text-center gap-y-4 '>
            <h1 className='lg:text-[5rem] text-[4rem] text-left text-gray-800 font-[Quantico] font-bold'>Fastest Delivery In <span className='text-orange-600'>Your City</span></h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum hic unde accusamus totam nihil laudantium sunt facere quo dolorem, similique nisi maiores eveniet necessitatibus suscipit corrupti fuga </p>
            <button className='md:px-4 text-white font-bold md:justify-start py-2 md:w-[8rem] mt-2 w-full bg-orange-600 rounded-md'>Order Now</button>
          </div>
        </div>
      <div className="flex  span-col-1 p-2">
         <div className="md:relative absolute  top-[750px]  left-10 right-10
          md:right-0 grid grid-cols-2 md:top-6 gap-y-24 gap-x-8
          md:left-52 md:gap-y-20   md:gap-x-10   md:h-[400px] md:w-[400px]">
           {heroOption(chocolate,'Ic Cream', 5.3, 'chocolate & vanila')}
           {heroOption(strawbery,'strawberries', 8.4, 'fresh strawberries')}
           {heroOption(fishImg,'Fish Kebab', 8.4, 'mixed fish kebab')}
           {heroOption(checkinImg,'Checkin kebab', 8.4, 'mixed kebab plate')}
         </div>
        
         <img className='md:w-1/2 w-screen md:justify-self-end' src={hero} alt="" />
      </div>
  
    </section>
    <section className='w-full my-6 mt-20'>
      <div className='w-full container mx-auto flex items-center justify-between'>
        <p className="text-2xl font-semibold capitalize text-gray-800 relative before:absolute before:rounded-lg before:content before:w-32 before:h-3 
        before:-bottom-4 font-[Quantico] before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-150">
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
        <div  id='slider' className='overflow-x-scroll scrollbar-hide snap-x scroll-smooth w-screen'>
          <div  className='w-[1700px] scroll-smooth gap-x-10 snap-center bg-gradient-to-r mt-14 from-transparent via-orange-200  p-14 to-transparent justify-center  flex'>
            {fruitMenu}
          </div>
        </div>
        </section>


          <section className='mt-20'>
            <div className="container mx-auto">
            <p className="text-2xl font-semibold capitalize text-gray-800 relative before:absolute before:rounded-lg before:content before:w-32 before:h-3 
        before:-bottom-4 font-[Quantico]  before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-150">
          Out Hot Dishes
        </p>
            </div>
        <div className="overflow-x-scroll md:scrollbar-hide md:scrollbar-none scroll-smooth w-screen">
          <div className='w-[1000px] p-4 mx-auto flex justify-around mt-10'>
          {  category.map(it => (
          <motion.div whileTap={{ scale : 0.75}} key={it.id} onClick={()=> setFilter(it.urlName)} className= {`h-20 w-20 rounded-xl hover:text-white/95 group transition-colors duration-500 mx-auto ease-in-out flex flex-col justify-center items-center ${filter === it.urlName ? 'bg-red-600' : 'bg-white'} hover:bg-red-600 shadow-lg`} >
            <div className= {` h-8 w-8  flex justify-center items-center text-lg rounded-full transition-all duration-400 ease-out group-hover:bg-white ${filter === it.urlName ? 'bg-white' : 'bg-red-600'} `}>
              <MdOutlineFastfood className={ ` group-hover:text-black ${filter === it.urlName ?  'text-black' : 'text-white' } `} />
            </div>
            <h1 className={`md:font-semibold font-[Quantico] ${filter === it.urlName ? 'text-white' : 'text-black'} font-bold group-hover:text-white`}>{it.urlName}</h1>
          </motion.div>
              )) }
          </div>
        </div>
       
       <div className='container mt-24   gap-8 flex  flex-wrap justify-center items-center mx-auto'>
            {data.length > 0 ? (data.map(it => (        
       <div key={it.id} className='flex items-center justify-between p-4 h-24 w-40  md:h-48 md:w-72 bg-white/40 mx-auto backdrop-blur-md shadow-lg rounded-lg hover:shadow-md'>
         <div className=' md:mt-7'>
          <motion.div whileTap={{scale : 0.8}} onClick={()=> handleSet(it)} className='p-1 md:p-2 md:relative h-5 
          w-5 flex justify-center items-center md:h-10 md:w-10 bottom-6
           rounded-full  bg-red-500 hover:bg-red-700 text-white'>
            <GiBasket className='md:text-2xl text-sm' />
          </motion.div>
          <h1 className='font-[stoke] font-extrabold text-xs md:text-lg text-gray-600'>{it.title}</h1>
            <h1 className='font-bold text-gray-500 md:text-lg text-xs font-mono'>{it.colaries}</h1>
            <div className='flex items-center mr-2'><BsCurrencyDollar className='text-red-700' />  
            <h1 className='font-semibold text-xs md:text-console.log();  text-gray-700'>{it.price}</h1></div>        
        </div>
       <motion.img  whileHover={{scale : 1.1}} className='h-14 md:h-36' src={it.image} alt="" />
    </div>
            ))) : (
              <div className='container p-4 md:p-0 flex flex-col justify-center items-center mx-auto'>
                <img className=' h-72' src={notfound} alt="" />
                <h1 className='mt-4 text-3xl text-gray-600 font-semibold font-[stoke]'> <span className='text-red-400'>{filter}</span> not found</h1>
              </div>
            )}
       </div>

        
     </section>
      
    </div>
  )
}

export default Home
