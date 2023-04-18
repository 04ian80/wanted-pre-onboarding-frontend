import FormSection from '../components/auth/FormSection';
import Form from '../components/auth/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signup } from '../apis/auth';
import HomeButton from '../components/base/HomeButton';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) navigate('/todo');
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(form)
      .then(() => navigate('/signin'))
      .catch((err) => {
        console.error(err);
        setError('❗️ 이메일이나 비밀번호를 잘못 입력하셨어요');
      })
      .finally(() => {
        setTimeout(() => {
          setError(null);
        }, 4000);
      });
  };

  return (
    <>
      <HomeButton />
      <FormSection title='회원가입'>
        <Form
          submitText='회원가입'
          handleSubmit={handleSubmit}
          form={form}
          setForm={setForm}
          testId='signup'
          error={error}
        />
      </FormSection>
    </>
  );
};

export default SignUp;
