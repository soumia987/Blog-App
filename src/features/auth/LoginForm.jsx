import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from './authService';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(form);
      navigate('/');
    } catch (err) {
      alert('Échec de la connexion. Vérifiez vos identifiants.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="h2 text-center mb-6">Connexion</h2>
      <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Input label="Mot de passe" name="password" type="password" value={form.password} onChange={handleChange} required />
      <Button type="submit" className="btn btn-lg w-full mt-4">Se connecter</Button>
    </form>
  );
};

export default LoginForm;
