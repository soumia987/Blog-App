import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreatePost from '../pages/CreatePost';
import EditPost from '../pages/EditPost';
import ArticleDetails from '../pages/ArticleDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
      <Route path="/post/:id" element={<ArticleDetails />} />
    </Routes>
  );
};

export default AppRoutes;
