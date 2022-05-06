import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/pages/Blog/Blog';
import Footer from './components/share/Footer/Footer';
import Navbar from './components/share/Navbar/Navbar';
import NotFound from './components/share/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
