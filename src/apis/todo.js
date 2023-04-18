import { todoClient } from './axios';

export const getTodos = async () => {
  return await todoClient.get('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
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
