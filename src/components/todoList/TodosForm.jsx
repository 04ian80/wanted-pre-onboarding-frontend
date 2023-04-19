const TodosForm = ({ children, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-between h-full'
    >
      {children}
    </form>
  );
};

export default TodosForm;
