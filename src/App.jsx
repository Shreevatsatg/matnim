import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import RegisterPage from "./pages/registerpage";
import Loginpage from "./pages/Loginpage";
import ForgotPassword from "./pages/forgot-passwordpage";

import PrivateRoute from "./components/privateroute";

import { AuthProvider } from "./context/authcontext";

function AppContent() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<BaseLayout><HomePage/></BaseLayout>} />
        <Route path="/about" element={<BaseLayout><AboutPage/></BaseLayout>} />
        <Route path="/subscription" element={<BaseLayout><PricingPage/></BaseLayout>} />

        {/* Protected route */}
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <BaseLayout><GalleryPage/></BaseLayout>
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<BaseLayout><RegisterPage/></BaseLayout>} />
        <Route path="/login" element={<BaseLayout><Loginpage/></BaseLayout>} />
        <Route path="/forgot-password" element={<BaseLayout><ForgotPassword/></BaseLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App;
