import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] =useState(false);
  const[posts,setPost] = useState([]);
  async function fetchProductData() {

    setLoading(true);
    try{
    const res = await fetch(API_URL);
    const data = await res.json();
    setPost(data);
   

    }
    catch(error){
    console.log("Error in API Call");
    setPost([])
    }
   finally{
    setLoading(false);
   }
    
  }
   
  
  useEffect(()=>{
  fetchProductData();
  },[])
  return (
    <div>
      {
        loading ? <Loader/> : 
        posts.length>0 ?
        (<div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post) => (
              <Product key={post.id} post={post} />
            ))
          }
        </div>) : 
        (<div className="flex justify-centeritem-center">
        <p>No Data Found</p>  
        </div>)
      }
    </div>
  );
};

export default Home;
