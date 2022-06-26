import { createSlice } from "@reduxjs/toolkit"





const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        show : false,
        data : []
    }
    ,
    reducers : {
        show : (state)=>{
            state.show = !state.show
        },
        clearData : (state)=>{
            state.data= []
        },
        setData: (state, action)=>{ 
          const itemIndex = state.data?.findIndex(it => it.id === action.payload.id)
          if(itemIndex >= 0){
          state.data[itemIndex].quantity += 1
          }else{
            const newItem = {...action.payload, quantity : 1}
            state.data.push(newItem)
          }
        },
        minusOne: (state, action) => {
            const itemIndex = state.data?.findIndex(it => it.id === action.payload.id) 
           void (state.data[itemIndex].quantity -= 1)
           
          
            
        }
               
    }
})


export const isShow = (state)=> state.cart.show
export const data = (state) => state.cart.data
export const {setData ,clearData, show, minusOne} = cartSlice.actions
export default cartSlice.reducer