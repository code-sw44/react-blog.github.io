import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
