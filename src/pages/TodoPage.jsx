import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo, getTodos } from '../apis/todo';
import TodosForm from '../components/TodoList/TodosForm';
import TodoAddInput from '../components/TodoList/TodoAddInput';
import TodoContainer from '../components/TodoList/TodoListHero';
import TodoLists from '../components/TodoList/TodoLists';

const TodoPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [newTodo, setNewTodo] = useState('');
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    (async () => {
      await getTodos().then((res) => {
        setTodoLists(res.data);
      });
    })();
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
    <TodoContainer>
      <TodosForm handleSubmit={handleSubmit}>
        <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} />
        <TodoAddInput newTodo={newTodo} setNewTodo={setNewTodo} />
      </TodosForm>
    </TodoContainer>
  );
};

export default TodoPage;
