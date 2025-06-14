import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts

import BaseLayout from './layouts/baselayout';

// Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/loginpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Here we wrap each route with BaseLayout */}
        <Route path="/" element={<BaseLayout><HomePage/></BaseLayout>} />
        <Route path="/gallery" element={<BaseLayout><GalleryPage/></BaseLayout>} />
        <Route path="/about" element={<BaseLayout><AboutPage/></BaseLayout>} />
        <Route path="/subscription" element={<BaseLayout><PricingPage/></BaseLayout>} />
        <Route path='/login' element={<BaseLayout><LoginPage/></BaseLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
