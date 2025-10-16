import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState([]);
  
  async function fetchProductData() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const res = await fetch(API_URL, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPost([]);
    } finally {
      setLoading(false);
    }
    
  }

  
  useEffect(()=>{
  fetchProductData();
  },[])
  return (
    <div className="min-h-[80vh] w-full">
      {loading && (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!loading && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl p-2 mx-auto min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      )}
      {!loading && posts.length === 0 && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
