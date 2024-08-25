// import { useContext, useEffect, useReducer, useState } from "react"
// import ProjectStore from "./context/store";
import Home from "./Home";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

// Example 3

// export const reducer = (state, action) => {
//   console.log(action);

//   if(action.type === "CHANGE_EMAIL") {
//     return {
//       ...state,
//       email: action.email
//       // password: action.password
//     }
//   }

//   else if (action.type === "CHANGE_PASSWORD") {
//     return  {
//       ...state,
//       password: action.password
//     }
//   }

//   else {
//     return state
//   }
// }

function App() {
  //Example 1

  // const [country, setCountry] = useState("Germany");

  // useEffect(() => {
  //   setCountry("Japan")
  // }, [])
  // console.log(country);


  //Example 2

  // const [user, setUser] = useState({
  //   email: 'john@gmail.com',
  //   password: '12345678'
  // })

  // const handleChangeData = () => {
  //   setUser({
  //     ...user,
  //     email: "bob@gmail.com"
  //   })
  // }

  // console.log(user);


  //Example 3

  // const [state, dispatch] = useReducer(reducer,  {
  //   email: 'john@gmail.com',
  //   password: '12345678'
  // })

  // const [state, dispatch] = useContext(ProjectStore);

  // console.log(state);

  // const handleChangeData = () => {
  //   dispatch ({email: "bob@gmail.com", password: "helloworld123*"})
  // }

  // console.log(state);

  return (
    <>
      {/* <input type="text" placeholder="Email" onChange={(e) => dispatch({type: "CHANGE_EMAIL", email: e.target.value})} />
      <input type="text" placeholder="Password" onChange={(e) => dispatch({type: "CHANGE_PASSWORD", password: e.target.value})} /> */}
      {/* <button onClick={handleChangeData}>Change Email</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
