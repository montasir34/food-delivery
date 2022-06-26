
import React , {useState, useEffect} from 'react'
import logo from '../images/img/logo.png'
import avatar from '../images/img/avatar.png'
import {IoIosBasket} from 'react-icons/io'
import {motion} from  'framer-motion'
import {Link} from 'react-router-dom'
import {app} from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, notLogin, userSelector } from '../features/userSlice'
import { IoMdAdd , IoMdLogOut } from 'react-icons/io'
import { show } from '../features/cartSlice'
import { data } from '../features/cartSlice'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


function Header() {
  const all = useSelector(data)
  const dispatch = useDispatch()
const user = useSelector(userSelector)
const [isMenu, setIsMenu]  = useState(false)

const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
useEffect(()=>{ 
  onAuthStateChanged(auth, (user)=>{ 
      dispatch(login(user?.providerData[0]))
    })  
},[])
  const HandleLogin = async () => {
await signInWithPopup(auth, provider)
}

function handleSignOut(){
  signOut(auth)
  dispatch(notLogin())
}
function toglleMenu(){
  
    setIsMenu(prev => !prev)
  
  
}


function handleBasket(){
dispatch(show())
}
  return (
  
<React.Fragment>
   <div className='sticky top-0 z-50 backdrop-blur-lg'>
            <div className="container  p-2 md:p-6  flex justify-between items-center mx-auto ">
      <div className='ml-7   md:ml-0 md:basis-1/2'>
      <Link to={"/"} className="flex md:flex-row flex-col gap-x-2 outline-none order-1 md:order-first  cursor-pointer items-center md:basis-1/2 ">
         <img className='h-11 ' src={logo} alt="logo" />
         <h1 className='text-3xl font-semibold text-gray-500 font-[Quantico]'>Sundus</h1>
      </Link>   
      </div>

      <motion.ul
        initial={{opacity : 0, x:200 }}
        animate={{opacity : 1, x: 0}}
        exit={{opacity : 0, x:200 }}
      className=' hidden md:flex md:-mr-28 font-[Quantico] sm:gap-x-2 items-center md:gap-x-7  lg:text-lg basis-1/3 font-semibold'>
        <li className='cursor-pointer text-gray-600 hover:text-black '>Menu</li>
        <li className='cursor-pointer text-gray-600 hover:text-black '>About</li>
        <li className='cursor-pointer text-gray-600 hover:text-black '>Home</li>
        <li className='cursor-pointer text-gray-600 hover:text-black '>Service</li>
      </motion.ul>
      
      <div onClick={handleBasket} className='order-first md:order-1 mr-4 cursor-pointer flex flex-col items-center justify-center -mt-4  '>
       {all?.length > 0 && <span className='ring-white top-3 left-3  ring-2 h-5 w-5 flex items-center justify-center font-bold rounded-full relative bg-red-600 text-white'>{all.length}</span>}
        <IoIosBasket className='text-3xl cursor-pointer' />
      </div>

     <div className='flex justify-between    items-center'>
      {isMenu && (
         <motion.div 
         initial={{opacity : 0, scale: 0.6}}
         animate={{opacity : 1, scale: 1}}
         exit={{opacity : 0, scale: 0.6}}
         className="absolute top-[85px] flex flex-col text-center justify-center  shadow-xl bg-white rounded-lg md:top-[90px] md:right-[50px]">

        <motion.ul className=' md:hidden  mx-auto flex flex-col text-center gap-y-2'>
        <li className='cursor-pointer text-gray-500 hover:bg-slate-200 px-5 hover:text-black '>Menu</li>
        <li className='cursor-pointer text-gray-500 hover:bg-slate-200 px-5 hover:text-black '>About Us</li>
        <li className='cursor-pointer text-gray-500 hover:bg-slate-200 px-5 hover:text-black '>Home</li>
        <li className='cursor-pointer text-gray-500 hover:bg-slate-200 px-5 hover:text-black '>Service</li>
      </motion.ul>
         { user && user.email ===  'mntsr9999.z@gmail.com' &&        <Link to={'/createItem'} onClick={()=> setIsMenu(false)} className='flex px-2 py-2 transition-all duration-100 ease-in-out  cursor-pointer hover:bg-slate-100 gap-x-2 items-center '>add item <IoMdAdd /> </Link>} 
         {user && <p onClick={handleSignOut} className='flex transition-all  px-4 py-2 duration-100 ease-in-out cursor-pointer rounded-b-xl font-bold hover:text-white hover:bg-gray-500 bg-slate-300 gap-x-2 items-center '>log out <IoMdLogOut /></p> }
         {!user && <button className='bg-slate-200 px-4 rounded p-2' onClick={HandleLogin} >Sign In</button>}
      </motion.div>
       )}
      </div>


      <div className='order-last rounded-full cursor-pointer'>
         <motion.img whileTap={{scale : 0.6}}  onClick={toglleMenu}  className='h-10 cursor-pointer rounded-full' src={ user ? user?.photoURL : avatar } alt="" />
      </div>

      
       
      
        
      </div>
        </div>
      
</React.Fragment>
       
      
     

  
  )
}

export default Header
