import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-[#333] mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link to={`/post/${post.id}`} className="text-[#FDCB82] hover:text-[#FF5EFA] font-medium">
        Lire la suite
      </Link>
    </div>
  );
};

export default PostCard;
