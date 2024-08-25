// import { useEffect, useState } from "react"

// const useFetch = (URL) => {
//     const [data, setData] = useState();
 
//     useEffect(() => {
//         const loadData = async() => {
//             const response = await fetch(URL);
//             const data = await response.json();
//             setData(data?.products);
//         }

//         loadData();



//         return () => loadData();
//     }, [URL])
//     // console.log(products);

//     return {data}
// }

// export { useFetch  }