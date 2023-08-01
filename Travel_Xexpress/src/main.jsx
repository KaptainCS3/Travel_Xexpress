import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Destinations from "./pages/Destinations";
import Guides from "./pages/Guides";
import Testimonials from "./pages/Testimonials";
import BlogDetails from "./pages/BlogDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs header="about" />} />
        <Route path="/services" element={<Services header="services" />} />
        <Route path="/package" element={<Packages header="packages" />} />
        <Route path="/contact" element={<Contacts header="contact" />} />
        <Route path="/blog" element={<Blog header="blog" />} />
        <Route
          path="/destination"
          element={<Destinations header="destination" />}
        />
        <Route path="/guide" element={<Guides header="guides" />} />
        <Route
          path="/testimonial"
          element={<Testimonials header="testimonials" />}
        />
        <Route
          path="/blog detail"
          element={<BlogDetails header="blog details" />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
