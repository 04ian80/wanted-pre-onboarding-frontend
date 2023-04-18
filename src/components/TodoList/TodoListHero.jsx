const TodoContainer = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-screen dark:bg-zinc-900'>
      <div className='flex flex-col w-10/12 max-w-[400px] h-[600px] border shadow-lg dark:bg-zinc-800 rounded-2xl pt-2 overflow-hidden max-xs:bg-transparent max-xs:rounded-none'>
        <h1 className='text-center text-4xl dark:text-white font-bold'>TODO</h1>
        <small className='text-center text-sm dark:text-zinc-200 px-3 break-keep'>
          원티드 프론트엔드 PRE-온보딩을 위한
          <br /> <strong className='text-blue-500'>TODO-LIST</strong>를
          적어보세요!
        </small>
        {children}
      </div>
    </div>
  );
};

export default TodoContainer;
