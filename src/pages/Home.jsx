import React, { useEffect, useState } from "react";
import axios from "../api/api"; 
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des articles :", error);
        setError("Une erreur est survenue lors du chargement des articles."); 
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FDCB82] via-[#F9D1D1] to-[#E0C3FC] p-6"> {/* تحديث الألوان هنا */}
      <h1 className="text-center text-4xl font-extrabold text-white mb-8">Bienvenue sur notre Blog</h1>
     
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
      ) : error ? ( 
        <p className="text-center text-xl text-red-500">{error}</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className=" text-center text-xl text-white">Aucun article trouvé.</p>
      )}
    </div>
    
  );
};

export default Home;
