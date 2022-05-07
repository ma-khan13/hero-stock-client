import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/pages/Blog/Blog';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/share/Footer/Footer';
import Navbar from './components/share/Navbar/Navbar';
import NotFound from './components/share/NotFound/NotFound';

function App() {
  return (
    <div className=" bg-dark">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
