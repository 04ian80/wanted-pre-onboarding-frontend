import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const HeadBar = () => {
  return (
    <div className='fixed flex dark:bg-zinc-900'>
      <Link
        to='/'
        className='text-2xl px-10 mt-5 text-zinc-800 font-bold dark:text-white'
      >
        <AiFillHome />
      </Link>
    </div>
  );
};

export default HeadBar;
