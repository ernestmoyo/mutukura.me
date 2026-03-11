import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Visualizations from './pages/Visualizations';
import Defense from './pages/Defense';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/visualizations" element={<Visualizations />} />
        <Route path="/defense" element={<Defense />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
