import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/pages/Blog/Blog';
import ManageStock from './components/pages/ManageStock/ManageStock';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
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
        <Route
          path="/manage/:id"
          element={
            <RequireAuth>
              <ManageStock></ManageStock>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
