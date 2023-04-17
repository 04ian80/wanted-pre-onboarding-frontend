import { useState } from 'react';

const VALIDATE_DATA = { isRightEmail: false, isRightPassword: false };
const MESSAGE_DATA = { email: null, password: null };

const Form = ({ submitText, handleSubmit, form, setForm, testId, error }) => {
  const [isRightForm, setIsRightForm] = useState(VALIDATE_DATA);
  const [message, setMessage] = useState(MESSAGE_DATA);

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
      {error && (
        <span className='self-center text-center bg-red-500 rounded text-white p-1 w-10/12'>
          {error}
        </span>
      )}
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
        {message.email && (
          <small className='text-red-500 p-1'>{message.email}</small>
        )}
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
        {message.password && (
          <small className='text-red-500 p-1'>{message.password}</small>
        )}
      </div>
      <button
        data-testid={`${testId}-button`}
        className='bg-blue-500 p-3 mr-3 rounded-lg text-white font-bold self-end cursor-pointer transition-colors duration-100 hover:bg-blue-400 disabled:bg-zinc-400'
        disabled={!(isRightForm.isRightEmail && isRightForm.isRightPassword)}
      >
        {submitText}
      </button>
    </form>
  );
};

export default Form;
