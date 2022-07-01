
import React from 'react'
import logo from '../images/img/logo.png'

function Footer() {
  return (
    <div>
        <div className="grid p-10 grid-cols-10 bg-orange-100 mt-20">
            <div className=''>
                <div className='flex items-center gap-x-3'>
                    <img className='h-14' src={logo} alt="" /> 
                    <h1 className='text-white text-3xl font-bold '>Sundus</h1>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer