
import React from 'react'
import { useState } from 'react'
import { category } from '../data'
import { motion } from 'framer-motion'
import {MdFastfood,MdAttachMoney , MdCategory, MdFoodBank,MdDelete} from 'react-icons/md'
import {FaCloudUploadAlt} from 'react-icons/fa'
import Loader from './Loader'
import { saveItem, storage } from '../firebase'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function CreateContainer() {
  const [title, setTitle] = useState('')
  const [colaries, setColaries] = useState('')
  const [Category, setCategory] = useState(null)


  const [image, setImage] = useState(null) 
  const [fields, setFields] = useState(false) 
  const [alert, setAlert] = useState('dnger')
  const [msg, setMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(null)
const cleartData = () =>{
   setPrice('') 
    setCategory('set Category')
   setColaries('')  
   setTitle('')
   setImage(null)
}



 const uploadImg = (e) =>{
    const imgFile = e.target.files[0]
  setLoading(true)
    const storageRef = ref(storage, `images/${Date.now()}-${imgFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imgFile)
    setLoading(false)
    uploadTask.on('state_changed', (snapshot)=>{
      const uploadProgress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    } ,
    (error) => {
      setFields(true)
      setMsg('oops error while uploading ')
      alert('danger')
      setTimeout(()=>{
        setFields(false)
        setLoading(false)
      }, 5000)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        setImage(downloadURL)
        setLoading(false)
        setFields(true)
        setMsg('image uploaded sucessesfully')
        setAlert('success')
        setTimeout(()=>{
          setFields(false)

        }, 5000)
      })          
    }

    )}

  const deleteImg = () =>{
    setLoading(true)
    const deleteRef= ref(storage, image)
    deleteObject(deleteRef).then(()=>{
      setImage(null)
      setLoading(false)
      setFields(true)
      setMsg('image deleted successesfully')
      setAlert('success')
      setTimeout(()=>{
        setFields(false)
      }, 3000)
    })
  }

const saveDetails = async () =>{
  setLoading(true)
  try{
    if((!price  || !Category  || !colaries  || !title)){
      setMsg('required fields cant be empty  ')
      setAlert('danger')
      setTimeout(()=>{
        setFields(false)
        setLoading(false)
      }, 4000)

    }else{
      const data = {
  id : `${Date.now()}`,
  title : title,
  image : image,
  category : Category,
  colaries : colaries,
  qty :1 ,
  price : price
}

saveItem(data)
setLoading(false)
setMsg('details uploaded successfully')
setAlert('success')
setFields(true)
cleartData()
setTimeout(()=>{
  setFields(false)
}, 4000)
    }
  }catch(error){
    setFields(true)
    setMsg('oops error while uploading ')
    alert('danger')
    setTimeout(()=>{
      setFields(false)
      setLoading(false)
    }, 4000)
  }

}






  return (
    <div>
      <div className='flex w-full items-center justify-center min-h-screen'>
        <div className="p-4 w-[90%] h-auto   md:w-[75%] rounded-lg border-gray-500 border flex flex-col items-center justify-center bg-gray-100">
        {fields && (
          <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className={`p-2 rounded-lg w-full text-center text-lg font font-semibold ${alert === 'danger' ?' bg-red-400 text-red-800': 'bg-emerald-500 text-emerald-800' }`}
          >{msg}</motion.p>
        )}
        <div className='flex items-center gap-x-2 w-full'>
          <MdFastfood className='text-gray-500 text-xl'  />
            <input 
        placeholder='title...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='placeholder:text-gray-400 bg-gray-100  font-semibold outline-none w-full border-b-2'
        type="text"
         name="title"
          id="" 
          required
          />
        </div>
        <div className='w-full items-center gap-x-1 flex'>
          <MdCategory className='mt-7  text-gray-500 text-xl' />
          <select
           onChange={(e) => setCategory(e.target.value)}
           
             id=""
            className='w-full p-2 mt-7 bg-white shadow  rounded text-gray-400 font-semibold outline-none '
            >
            <option value="other" className='bg-white text-gray-400'> select Category</option>
            {category && category.map((item) =>(
              <option
               key={item.id}
               className='text-base border-0 outline-none capitalize bg-white text-gray-600'
               value={item.urlName}>{item.name}</option>
            ))}
          </select>
        </div>
          <div className='flex mt-7 flex-col justify-center items-center group border-2 border-dotted border-gray-300 w-full h-96 md:420  rounded-lg'>
             {loading? <Loader /> : (
              <>
              {!image? (
              <>
                <label className="flex items-center cursor-pointer w-full h-38   flex-col">
                  <FaCloudUploadAlt className='text-2xl text-gray-500 '/>
                  <h1 className='font-semibold text-xl mt-3 text-gray-500 '>click here to upload</h1>
                 <input
                 type="file" 
                 name="image" 
                 accept='image/*'
                 id=""
                 className='w-0 h-0'
                 onChange={uploadImg}
                  />
                </label>

              </>
              ) : (
              <>
              <div className='h-full relative'>
                <img
                className='object-cover w-full h-full'
                src={image}
                 alt="" />
                <button 
                onClick={deleteImg}
                 className='rounded-full p-3 relative -top-11 bg-red-500 text-xl cursor-pointer outline-none
                hover:shadow-md duration-500 transition-all ease-in-out'>
                  
                  <MdDelete className=' text-white'/>
                </button>
              </div>
              </>
              )
            
            }
              </>
             )}
          </div>
          <div className='w-full flex md:flex-row md:items-center justify-center flex-col gap-x-1 gap-y-5 mt-5'>
          <div className='flex w-full gap-1'>
            <MdFoodBank className='text-xl mt-1' />
            <input
              placeholder='calories'
              required
              value={colaries}
              onChange={e => setColaries(e.target.value)}
              className='w-full h-full text-lg bg-transparent outline-none border-b-2 text-gray-600 placeholder:text-gray-400 font-semibold'
             type="text"
              />
          </div>
           
              <div className='flex w-full gap-1'>
             <MdAttachMoney className='text-xl mt-1' />
              <input
              placeholder='Price'
              required
              value={price}
              onChange={e => setPrice(e.target.value)}
              className='w-full h-full text-lg bg-transparent outline-none border-b-2 text-gray-600 placeholder:text-gray-400 font-semibold'
             type="number"
              />
              </div>           
          </div>
          <div className='flex mt-4 mb-1 justify-end w-full'>
            <button
            className='md:w-[20%] w-full p-2  text-white hover:bg-emerald-800 bg-emerald-600 font-semibold rounded-lg'
            onClick={saveDetails}
            >save</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default CreateContainer
