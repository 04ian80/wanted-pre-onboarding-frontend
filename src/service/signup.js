import axios from 'axios';
import { SIGNUP_URL } from '../config/config';
import { useNavigate } from 'react-router-dom';

const sendFormData = async (email, password) => {
  await axios.post(SIGNUP_URL, { email, password }).then((res) => {
    return res;
  });
};

export default sendFormData;
