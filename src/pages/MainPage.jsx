import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen dark:bg-zinc-900'>
      <div className='flex justify-around mt-10 min-sm:[&>*]:py-10 max-sm:[&>*]:py-2 w-10/12 shadow-md border rounded-xl overflow-hidden'>
        <Link
          to='/signin'
          className='flex flex-col items-center w-1/2 border-r cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800'
        >
          <h2 className='text-4xl font-semibold text-zinc-800 dark:text-white max-sm:text-sm'>
            계정이 있으신가요?
          </h2>
          <div className='text-blue-500 font-bold text-3xl max-sm:text-lg'>
            로그인하기
          </div>
        </Link>
        <Link
          to='/signup'
          className='flex flex-col items-center w-1/2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800'
        >
          <h2 className='text-4xl font-semibold text-zinc-800 dark:text-white max-sm:text-sm'>
            처음이신가요?
          </h2>
          <div className='text-blue-500 font-bold text-3xl max-sm:text-lg'>
            회원가입하기
          </div>
        </Link>
      </div>
      <small className='text-base text-zinc-700 mt-10 dark:text-zinc-200 max-sm:text-sm'>
        이미 로그인 되어있다면 자동으로 todo 페이지로 이동해요!
      </small>
      <Link
        to='/todo'
        className='flex flex-col items-center mt-10 shadow-lg rounded-xl overflow-hidden border w-[400px] max-sm:w-[300px] transition-all duration-150 ease-linear hover:-translate-y-1 hover:shadow-5xl dark:bg-zinc-800'
      >
        <div className='text-center py-4 dark:text-white'>
          <h2 className='text-3xl uppercase font-semibold'>todo list 만들기</h2>
          <small>나만의 TODO를 만들어봐요</small>
        </div>
        <img
          src='/images/todo-image.png'
          width={400}
          height={400}
          alt='todo list 미리보기'
        />
      </Link>
    </div>
  );
};
export default MainPage;
