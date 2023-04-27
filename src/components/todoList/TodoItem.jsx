import { useRef, useState } from 'react';
import { deleteTodo, getTodos, updateTodo } from '../../apis/todo';
import EditTodoButtons from './EditTodoButtons';
import { BsCheck } from 'react-icons/bs';

const TodoItem = ({ todoList, setTodoLists }) => {
  const { id, todo, isCompleted } = todoList;
  const [showEdit, setShowEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const checkboxRef = useRef(null);

  const handleDelete = async () => {
    await deleteTodo(id).then((res) => {
      setTodoLists(res.data);
    });
  };

  const handleConfirmEdit = async () => {
    await updateTodo(id, editedTodo, isCompleted).then(async () => {
      await getTodos().then((res) => {
        setTodoLists(res.data);
      });
    });
    setShowEdit(false);
  };

  const handleChangeTodo = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleCompleteTodo = async () => {
    await updateTodo(id, todo, !isCompleted).then(async () => {
      await getTodos().then((res) => {
        setTodoLists(res.data);
      });
    });
  };

  return (
    <li key={id} className='flex justify-between items-center p-2'>
      <label className='flex items-center text-xl'>
        <label
          onClick={() => checkboxRef.current.focus()}
          htmlFor={id}
          className='w-5 h-5 rounded-full cursor-pointer transition-colors duration-100 ease-in hover:bg-blue-400 dark:hover:bg-blue-300 dark:bg-white'
        >
          {isCompleted && <BsCheck />}
        </label>
        <input
          className='hidden'
          type='checkbox'
          value={isCompleted}
          id={id}
          ref={checkboxRef}
          onChange={handleCompleteTodo}
        />
        {!showEdit && (
          <span
            className={`ml-3 dark:text-white ${
              isCompleted && `line-through text-zinc-500`
            }`}
          >
            {todo}
          </span>
        )}
        {showEdit && (
          <input
            className='rounded-xl max-w-[190px] max-sm:max-w-[150px] ml-2 px-2 bg-zinc-100'
            type='text'
            value={editedTodo}
            onChange={handleChangeTodo}
          />
        )}
      </label>
      <div>
        {showEdit && (
          <div className='flex'>
            <EditTodoButtons
              testId='submit-button'
              icon='confirm'
              onClick={handleConfirmEdit}
              className='dark:text-white'
            />
            <EditTodoButtons
              testId='cancel-button'
              icon='cancel'
              onClick={() => {
                setShowEdit(false);
                setEditedTodo(todo);
              }}
              className='dark:text-white'
            />
          </div>
        )}
        {!showEdit && (
          <div className='flex'>
            <EditTodoButtons
              testId='modify-input'
              icon='edit'
              onClick={() => setShowEdit(true)}
              className='dark:text-white'
            />
            <EditTodoButtons
              icon='delete'
              onClick={handleDelete}
              className='dark:text-white'
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
