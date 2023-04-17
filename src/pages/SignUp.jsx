import SignInForm from '../components/SignInForm';

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900'>
      <div className='flex flex-col justify-between bg-white drop-shadow rounded-lg p-5 w-10/12 max-w-[600px] min-h-[300px] dark:bg-zinc-800'>
        <div className='text-center font-medium py-3 dark:text-white'>
          원티드 프론트엔드 인턴쉽에
          <strong className='text-blue-500'> PRE-온보딩</strong> 하세요!
        </div>
        <h1 className='text-center text-3xl text-zinc-800 font-bold mb-2 dark:text-white'>
          회원가입
        </h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignUp;
