import { useEffect, useState } from 'react';
import FormSection from '../components/Auth/FormSection';
import Form from '../components/Auth/Form';
import { useNavigate } from 'react-router-dom';
import { signin } from '../apis/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) navigate('/todo');
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    signin(form)
      .then((res) => {
        localStorage.setItem('token', res.data.access_token);
        navigate('/todo');
      })
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
    <FormSection title='로그인'>
      <Form
        submitText='로그인'
        handleSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        testId='signin'
        error={error}
      />
    </FormSection>
  );
};

export default SignIn;
