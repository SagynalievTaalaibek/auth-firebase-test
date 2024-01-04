import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LogIn from './containers/LogIn/LogIn';
import Register from './containers/Register/Register';

const App = () => {
  return (
    <>
      <header className='bg-body-secondary'>
        <div className='container mb-2'>
          <Navbar/>
        </div>
      </header>
      <main>
        <div className='container'>
          <Routes>
            <Route path={'/login'} element={<LogIn />}/>
            <Route path={'/register'} element={<Register/>}/>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;