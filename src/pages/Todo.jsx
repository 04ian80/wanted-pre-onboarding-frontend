import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate('/signin');
  }, [token, navigate]);

  return <div>Todo</div>;
};

export default Todo;
