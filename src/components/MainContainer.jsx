import { Home, Cart } from './index'
import React from 'react'
import { productSelector } from '../features/productSlice';
import {isShow, data} from '../features/cartSlice'
import { useSelector } from 'react-redux/es/exports';
import { Footer } from './index'

function MainContainer() { 
  const products = useSelector(productSelector)
  const show = useSelector(isShow)


  return (
    <div>
     <Home products = {products} />
     <Footer />
{show && <Cart />}
  </div>
  )
}

export default MainContainer
