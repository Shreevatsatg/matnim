import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';

// Pages
import HomePage from './pages/HomePage';
import CreateAnimationPage from './pages/CreateAnimationPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateAnimationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
