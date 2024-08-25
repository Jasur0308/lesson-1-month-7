import { useContext } from "react"
// import { useFetch } from "./hooks/useFetch"
import ProjectStore from "./context/store"
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Home = () => {
    // const [_, dispatch] = useContext(ProjectStore)
    // const {data} = useFetch("https://dummyjson.com/products")

    // const handleAddToCart = (product) => {
    //     dispatch({type: "ADD_TO_CART", product})
    // }

    const [state] = useContext(ProjectStore);

  return (
    <div className="container">
        {/* {
            data && data.map((product) => 
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.thumbnail} alt="" />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>)
        } */}
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Registered Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.cart_users.length > 0 ? (
                    state.cart_users.map((user) => (
                        <div key={user.email} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.email}</h2>
                            <p className="text-gray-600">Password: <span className="font-medium">{user.password}</span></p>
                            <p className="text-gray-600">Age: <span className="font-medium">{user.age}</span></p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No users registered yet.</p>
                )}
            </div>
            <div className="mt-8 flex justify-center">
                <Link 
                    className=" max-w-[200px] w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
                    to='/register'
                >
                    Register
                </Link>
            </div>
    </div>
  )
}

export default Home