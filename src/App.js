import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/signin'} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
