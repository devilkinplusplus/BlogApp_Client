import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Profile from './components/pages/profile/profile';
import Register from './components/pages/auth/register';
import Login from './components/pages/auth/login';
import BlogCreate from './components/pages/profile/blogCreate';
import MyBlogs from './components/pages/profile/myBlogs';
import Account from './components/pages/profile/account';
import BlogDetail from './components/pages/blog/blogDetail';
import BlogHomeDetail from './components/pages/blogHomeDetail';
import PrivateRoute from './components/helpers/privateRoute';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem('accessToken') || '');

  useEffect(() => {
    localStorage.setItem('accessToken', token.accessToken);
  }, [token]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/blog/:id' element={<BlogHomeDetail />} />
           
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} >
              <Route path='create' element={<BlogCreate />} />
              <Route path='' element={<Account />} />
              <Route path='blogs' element={<MyBlogs />} />
              <Route path=':id' element={<BlogDetail />} />
            </Route>
            {/* <Route path='*' element={<Contact/>} /> */}
          </Routes>
            <ToastContainer />
        </main>
      <Footer />
    </div>
  );
}

export default App;
