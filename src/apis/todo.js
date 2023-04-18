import { todoClient } from './axios';

export const getTodos = async (setTodoLists) => {
  return await todoClient.get('/todos');
  //setstate 밖으로 빼서 useEffect에 감싸기
};

export const createTodo = async (newTodo) => {
  return await todoClient.post(
    '/todos',
    { todo: newTodo },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const deleteTodo = async (id) => {
  return await todoClient.delete(`/todos/${id}`).then(() => getTodos());
};

export const updateTodo = async (id, editedTodo, checked) => {
  return await todoClient.put(
    `/todos/${id}`,
    { todo: editedTodo, isCompleted: checked },
    { headers: { 'Content-Type': 'application/json' } }
  );
};
