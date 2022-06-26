
import {FaArrowRight} from 'react-icons/fa'
import {AiOutlineClear} from 'react-icons/ai'
import { motion } from 'framer-motion'

import fa from  '../images/img/c1.png'
import React from 'react'
import emptyCart from '../images/img/emptyCart.svg'
import {data, show} from '../features/cartSlice'
import { setData, clearData } from '../features/cartSlice'
import {useSelector, useDispatch, } from 'react-redux'
import {userSelector} from '../features/userSlice'
import CartItem from './CartItem'

function Cart() {
const dispatch = useDispatch()
const all = useSelector(data)

const user = useSelector(userSelector)

function handleBasket(){
  dispatch(show())
  }

  function clearAll(){
    dispatch(clearData())
  }

 
 
  return (
    <motion.div 
    initial={{opacity: 0, x:200}} 
    animate={{opacity: 1, x:0}} 
    exit={{opacity: 0, x:210}} 
    className=' p-3 w-full md:w-1/5 bg-white/5 backdrop-blur-lg h-screen fixed top-[92px] right-0'>
      <div className='justify-between items-center flex '>
           <motion.div onClick={handleBasket}  className='w-10 h-5 cursor-pointer' whileTap={{scale : 0.75}}>
        <FaArrowRight className=' text-lg'  />
        </motion.div>
      <h1 className='text-xl font-bold font-[Quantico] -mt-2 -mr-2' >cart</h1>
      <motion.div onClick={clearAll} whileTap={{scale : 0.75}} className='flex cursor-pointergroup
       hover:bg-slate-900 h-6 -mt-1 font-[Quantico]
        font-bold p-2 cursor-pointer group justify-center items-center 
        bg-slate-800 gap-x-2 text-slate-100 
        rounded-full'><p>clear</p>
         <AiOutlineClear className=' text-slate-100 text-lg' />
         </motion.div>
        </div>
        {all.length > 0 ?  (
          <div className='mt-7 rounded-xl text-white p-4 bg-gray-900/80 h-[450px] w-full'>
          <div className='w-full flex flex-col gap-2 overflow-y-scroll scrollbar-hide h-[208px] rounded-xl'>
            {all && all.map(it => (
              <CartItem key={it.id} it={it} />
            ))}
          </div>
          <div className='w-full h-48 mt-5 p-4 bg-slate-900 rounded-lg'>
            <div className='flex justify-between h-8 w-full'>
              <h1 className='font-[Quantico]'>Sub Total</h1>
              <h1>4.5</h1>
            </div>
            <div className='flex justify-between h-8 w-full'>
              <h1 className='font-[Quantico]'>Delivery</h1>
              <h1>2.5</h1>
            </div>
            <hr className='' />
            <div className="w-full mt-6 flex justify-between font-[Quantico]">
              <h1>Total</h1>
              <h1>3.5</h1>
            </div>
           {user ? (
             <motion.button whileTap={{scale: 0.96}} className=' rounded-full bg-slate-100 text-slate-900
             hover:bg-slate-200 
             font-[Quantico] p-2 mt-3 w-full'>Check Out</motion.button>
           ): (
            <motion.button whileTap={{scale: 0.96}} className=' rounded-full bg-slate-100 text-slate-900
            hover:bg-slate-200 
            font-[Quantico] p-2 mt-3 w-full'>Log In</motion.button>
           )}
          </div>    
        </div>
        ): (
          <div className='w-full p-2 object-cover bg-white flex items-center h-[500px]'>
            <img className=' object-cover ' src={emptyCart} alt="" />
          </div>
        )}
    </motion.div>
  )
}

export default Cart
