import './App.css';
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Header from "./components/scripts/Header";
import Content from "./components/scripts/Content";
import Mission from "./components/scripts/Mission";
import FeaturedItems from "./components/scripts/FeaturedItems";
import Footer from "./components/scripts/Footer";
import CheckoutPage from "./components/scripts/CheckoutPage";
import AllItems from "./components/scripts/AllItems";
import Login from "./components/scripts/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } 
      
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <nav>
        <Routes>
          <Route path="/" element={[<Header />, <Content />, <Mission />, <FeaturedItems />, <Footer />]}/>
          <Route path = "/checkout" element = {[<Header />, <CheckoutPage />]} />
          <Route path = "/items" element = {[<Header />, <AllItems />]} />
          <Route path = "/login" element = {[<Login />]} />
        </Routes>
      </nav>
    </Router>
  );
}

export default App;
