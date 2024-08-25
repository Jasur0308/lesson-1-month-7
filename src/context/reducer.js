export const initialState = {
    // email: "john@gmail.com", 
    // password: "12345678"
    // cart_products: []

    // cart_products: JSON.parse(localStorage.getItem("cart")) || []

    // cart_users: []

    cart_users: JSON.parse(localStorage.getItem("cart_users")) || []
}

// Example 3

export const reducer = (state, action) => {
    // console.log(action);
    
    // if(action.type === "CHANGE_EMAIL") {
    //   return {
    //     ...state,
    //     email: action.email
    //     // password: action.password
    //   }
    // }
  
    // else if (action.type === "CHANGE_PASSWORD") {
    //   return  {
    //     ...state,
    //     password: action.password
    //   }
    // }
  
    // else {
    //   return state
    // }

    
    if (action.type === "REGISTER") {
        const existingUser = state.cart_users.find(user => user.email === action.user.email);

        if (existingUser) {
            return state;
        }

        const updatedUsers = [...state.cart_users, action.user];
        
        localStorage.setItem("cart_users", JSON.stringify(updatedUsers));
        
        return {
            cart_users: updatedUsers
        };
    } else {
        return state;
    }
}