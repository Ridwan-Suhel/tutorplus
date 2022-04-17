// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Home/Login/Login";
import NotFound from "./components/Pages/NotFound/NotFound";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
