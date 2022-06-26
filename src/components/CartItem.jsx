
import React, {useState, useEffect} from 'react'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import {data, setData, minusOne} from '../features/cartSlice'
import {useSelector, useDispatch} from 'react-redux'

function CartItem({it}) {

    const all = useSelector(data)
    const dispatch = useDispatch()
    
   
   
    const updateQty = (action) => {
        dispatch(setData(action))
       
        }

     const minuus = (action)=>{
      dispatch(minusOne(action))
     }

   
 

  return (
    <div>
       <div className="flex items-center justify-between h-16 p-2 bg-slate-800 rounded-xl gap-x-2">
               <div className='flex md:gap-x-2 gap-x-4'>
               <div>
                   <img className='h-12 w-12' src={it.image} alt="" />
               </div>
                 <div className='flex flex-col gap-y-1 font-[Quantico]'>
                   <h1 className='text-slate-100 '>{it.title}</h1>
                   <h1 className='text-sm text-slate-300 '>
                     <span className='text-sm text-red-400'>$ </span> 
                     {it.price * it.quantity}
                   </h1>
                 </div> 
               </div>
              
                 <div className='flex p-2 gap-x-1 ml-6  justify-between items-center'>
                   <FaMinus onClick={()=> minuus(it)}   className='text-slate-200' />
                     <span className='text-slate-300 text-lg'>{it.quantity}</span>
                   <FaPlus onClick={()=> updateQty(it)} className='text-slate-200' />
                 </div>
               </div>
    </div>
  )
}

export default CartItem
