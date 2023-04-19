import { todoClient } from './axios';

export const getTodos = async () => {
  const token = localStorage.getItem('token');
  return await todoClient.get('/todos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTodo = async (newTodo) => {
  const token = localStorage.getItem('token');
  return await todoClient.post(
    '/todos',
    { todo: newTodo },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteTodo = async (id) => {
  const token = localStorage.getItem('token');
  return await todoClient
    .delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => getTodos());
};

export const updateTodo = async (id, editedTodo, checked) => {
  const token = localStorage.getItem('token');
  return await todoClient.put(
    `/todos/${id}`,
    { todo: editedTodo, isCompleted: checked },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
