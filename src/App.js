import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AddStock from './components/AddStock/AddStock';
import Home from './components/Home/Home';
import ManageInvantoris from './components/ManageInvantoris/ManageInvantoris';
import MyStock from './components/MyStock/MyStock';
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
          path="/addstock"
          element={
            <RequireAuth>
              <AddStock></AddStock>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-invantory"
          element={
            <RequireAuth>
              <ManageInvantoris></ManageInvantoris>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/mystock"
          element={
            <RequireAuth>
              <MyStock></MyStock>
            </RequireAuth>
          }
        ></Route>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
