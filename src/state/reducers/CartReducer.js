
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions.js'


const initState = {
    items: [
        {
            id:1, 
            desc: "aashirvaad aata 10 kg", 
            price:110,
            quantity:1,
            image:"https://cdn.shopify.com/s/files/1/0173/7644/4470/products/40127505-2_0bc93e18-7167-4ba8-811c-9342bf2e75fa_compact.jpg?v=1626069887"
        },

        
    {
        id:2, 
        desc: "aashirvaad aata 20 kg", 
        price:110,
        quantity:1,
        image:"https://cdn.shopify.com/s/files/1/0173/7644/4470/products/40127505-2_0bc93e18-7167-4ba8-811c-9342bf2e75fa_compact.jpg?v=1626069887"},
    
],

    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.product.id)
        let product= state.addedItems.find(item=> action.product.id === item.id)
    
    if(product){
        console.log(state.addedItems)
       return {
           ...state ,addedItems:[...state.addedItems,action.product,
   {quantity:product.quantity++,
totalPrice:product.price*product.quantity}]
       }
   }
   else{
    console.log("else ",state.addedItems)
       return {
           ...state,
           addedItems:[...state.addedItems,action.product,{totalPrice:action.product.price}],
       }
   }

}
    //INSIDE HOME COMPONENT
    
        
          let addedItem = state.items.find(item=> item.id === action.id)
    //       //check if the action id exists in the addedItems
    //      let existed_item= state.addedItems.find(item=> action.id === item.id)
    //      if(existed_item)
    //      {

    //         // addedItem.quantity += 1 
    //          return{
    //             ...state,

    //              total: state.total + addedItem.price 
    //               }
    //     }
    //      else{
            
    //         addedItem.quantity = 1;
    //         //calculating the total
    //         let newTotal = state.total + addedItem.price 
            
    //         return{
    //             ...state,
    //             addedItems: [...state.addedItems, addedItem],
    //             total : newTotal
    //         }
            
    //     }
    // }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer