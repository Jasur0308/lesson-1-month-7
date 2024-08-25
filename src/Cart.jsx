import { useContext } from "react"
import ProjectStore from "./context/store"

const Cart = () => {
  // const [state, dispatch] = useContext(ProjectStore);
  // console.log(state);

  const [state] = useContext(ProjectStore);

  return (
    <div>
      {/* <h1>Cart {state?.cart_users.length}</h1> */}
      {/* {
        state?.cart_products && state?.cart_products.map((product) => 
          <div key={product.id}>
          <img style={{width: "100px"}} src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>)
      }
      <hr /> */}

    <div className="mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Registered Users: {state.cart_users.length}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {state.cart_users && state.cart_users.map((user) => (
            <div key={user.email} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h2 className="text-lg font-medium text-blue-600 mb-2">{user.email}</h2>
                <p className="text-gray-600 mb-2"><strong>Password:</strong> {user.password}</p>
                <p className="text-gray-600"><strong>Age:</strong> {user.age}</p>
            </div>
        ))}
        </div>
    </div>

    </div>
  )
}

export default Cart