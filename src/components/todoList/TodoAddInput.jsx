const TodoAddInput = ({ newTodo, setNewTodo }) => {
  return (
    <div className='w-full max-xs:rounded max-xs:overflow-hidden border-t'>
      <input
        autoFocus
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        data-testid='new-todo-input'
        type='text'
        placeholder='오늘의 투두를 추가해 주세요!'
        className='w-3/4 p-2 focus:outline-none'
      />
      <button
        data-testid='new-todo-add-button'
        className='w-1/4 text-white font-bold bg-blue-500 py-2'
      >
        추가하기
      </button>
    </div>
  );
};

export default TodoAddInput;
