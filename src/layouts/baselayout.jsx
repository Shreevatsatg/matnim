// src/components/BaseLayout.jsx
import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

function BaseLayout({ children }) {
  return (
    <div className="layout">
      {/* Navbar rendered on all routes */}
      <Navbar />

      {/* The main content for each route will appear here */}
      {children}

      {/* Footer rendered on all routes */}
      <Footer />
    </div>
  )
}

export default BaseLayout;
