import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({ 
    name : 'products',
    initialState : {
         products : []
        },
    reducers : {
        setProducts : (state, action) =>{ 
            if (!state.products.find(({id}) => id === action.payload.id)) {
                state.products.push(action.payload);
              }
                   
            }
            
        
    }
})

export const productSelector = (state) => state.products.products
export const {setProducts} = productSlice.actions
export default productSlice.reducer