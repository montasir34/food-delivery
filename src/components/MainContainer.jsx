import { Home, Cart } from './index'
import React from 'react'
import { productSelector } from '../features/productSlice';
import {isShow, data} from '../features/cartSlice'
import { useSelector } from 'react-redux/es/exports';

function MainContainer() { 
  const products = useSelector(productSelector)
  const show = useSelector(isShow)


  return (
    <div>
     <Home products = {products} />
{show && <Cart />}
  </div>
  )
}

export default MainContainer
