import FormSection from '../components/Form/FormSection';
import Form from '../components/Form/Form';
import axios from 'axios';
import { SIGNUP_URL } from '../config/config';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    axios
      .post(SIGNUP_URL, form)
      .then((res) => {
        navigate('/signin');
      })
      .catch((err) => {
        console.error(err);
        setTimeout(() => {
          setError('❗️ 이메일이나 비밀번호를 잘못 입력하셨어요');
        }, 4000);
      });
  };

  return (
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
  );
};

export default SignUp;
