import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_URL } from '../config/config';
import axios from 'axios';

const FORM_DATA = { email: '', password: '' };
const VALIDATE_DATA = { isRightEmail: false, isRightPassword: false };
const MESSAGE_DATA = { email: null, password: null };

const SignInForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(FORM_DATA);
  const [isRightForm, setIsRightForm] = useState(VALIDATE_DATA);
  const [message, setMessage] = useState(MESSAGE_DATA);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(SIGNUP_URL, form).then((res) => {
      console.log(res);
      if (res.status === 201) {
        navigate('/signin');
      }
    });
  };

  const handleChangeEmail = (e) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
    const regex = new RegExp('[a-z0-9]+@[a-z]');
    if (regex.test(e.target.value)) {
      setIsRightForm((prev) => ({ ...prev, isRightEmail: true }));
      setMessage((prev) => ({ ...prev, email: null }));
    } else {
      setIsRightForm((prev) => ({ ...prev, isRightEmail: false }));
      setMessage((prev) => ({
        ...prev,
        email: '올바른 이메일 형식으로 입력해주세요',
      }));
    }
  };

  const handleChangePassword = (e) => {
    setForm((prev) => ({ ...prev, password: e.target.value }));
    if (e.target.value.length >= 8) {
      setIsRightForm((prev) => ({ ...prev, isRightPassword: true }));
      setMessage((prev) => ({ ...prev, password: null }));
    } else {
      setIsRightForm((prev) => ({ ...prev, isRightPassword: false }));
      setMessage((prev) => ({
        ...prev,
        password: '8자리 이상으로 입력해주세요',
      }));
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center [&>:not(:last-child)]:mb-3 dark:text-white'
    >
      <div className='flex flex-col'>
        <label htmlFor='email'>이메일</label>
        <input
          autoComplete='off'
          className='border rounded-lg py-3 px-2 dark:bg-zinc-900'
          onChange={handleChangeEmail}
          value={form.email}
          data-testid='email-input'
          name='email'
          type='text'
          placeholder='이메일을 입력해주세요'
        />
        {message.email && <small>{message.email}</small>}
      </div>
      <div className='flex flex-col'>
        <label data-testid='password-input' htmlFor='password'>
          비밀번호
        </label>
        <input
          autoComplete='off'
          className='border rounded-lg w-full py-3 px-2 dark:bg-zinc-900'
          onChange={handleChangePassword}
          value={form.password}
          minLength={8}
          data-testid='signup-button'
          name='password'
          type='text'
          placeholder='비밀번호를 8자리 이상 입력해주세요'
        />
        {message.password && <small>{message.password}</small>}
      </div>
      <button
        className='bg-blue-500 p-3 rounded-lg text-white font-bold self-end cursor-pointer transition-colors duration-100 hover:bg-blue-400'
        disabled={!(isRightForm.isRightEmail && isRightForm.isRightPassword)}
      >
        회원가입
      </button>
    </form>
  );
};

export default SignInForm;
