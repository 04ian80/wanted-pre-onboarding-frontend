import TodoItem from './TodoItem';

const TodoLists = ({ todoLists, setTodoLists }) => {
  return (
    <ul className='px-6 py-2 text-lg h-5/6 max-h-[450px] overflow-scroll scrollbar-hide max-xs:mt-3'>
      {todoLists.map((todoList) => (
        <TodoItem
          todoList={todoList}
          key={todoList.id}
          setTodoLists={setTodoLists}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
