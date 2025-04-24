import axios from '../../api/api';

const login = async (data) => {
  const res = await axios.post('/login', data);
  localStorage.setItem('user', JSON.stringify(res.data));
  return res.data;
};

const register = async (data) => {
  const res = await axios.post('/register', data);
  return res.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
};
