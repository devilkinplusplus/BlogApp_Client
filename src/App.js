import './App.css';
import {Route,Link,NavLink, Routes} from 'react-router-dom'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Profile from './components/pages/profile';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
