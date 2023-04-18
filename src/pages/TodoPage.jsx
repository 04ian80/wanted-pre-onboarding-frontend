import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo, getTodos } from '../apis/todo';
import TodosForm from '../components/todoList/TodosForm';
import TodoAddInput from '../components/todoList/TodoAddInput';
import TodoContainer from '../components/todoList/TodoListHero';
import TodoLists from '../components/todoList/TodoLists';
import HomeButton from '../components/base/HomeButton';

const TodoPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [newTodo, setNewTodo] = useState('');
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      if (res.data) {
        setTodoLists(res.data);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo) {
      await createTodo(newTodo, setTodoLists).then((res) => {
        setTodoLists((prev) => [...prev, res.data]);
      });
    }
    setNewTodo('');
  };

  useEffect(() => {
    if (!token) navigate('/signin');
  }, [token, navigate]);

  return (
    <>
      <HomeButton />
      <TodoContainer>
        <TodosForm handleSubmit={handleSubmit}>
          <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} />
          <TodoAddInput newTodo={newTodo} setNewTodo={setNewTodo} />
        </TodosForm>
      </TodoContainer>
    </>
  );
};

export default TodoPage;
