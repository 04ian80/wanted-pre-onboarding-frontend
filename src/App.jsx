import './app.css';
import './tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/todo'} element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
