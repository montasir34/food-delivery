import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import { db, getAllFoodItems } from './firebase';
import { setProducts } from './features/productSlice';
import { useDispatch } from 'react-redux/es/exports';
import {Header, MainContainer, CreateContainer} from './components/index' 
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";


function App() {


  return (
    <AnimatePresence exitBeforeEnter>
     <div className='w-screen bg-orange-50  flex flex-col'>

        <Header  /> 
          <main className='mt-16 md:mt-5'>
            <Routes>
              <Route path='/*' element={ <MainContainer /> } />
              <Route path='/createItem' element={ <CreateContainer /> } />
            </Routes>
          </main>
      
    </div>
    </AnimatePresence>
    
  );
}

export default App;
