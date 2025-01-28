import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        {/* Add a wildcard route for 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router unstable_futures={{ v7_startTransition: true }}>
        <div className="min-h-screen bg-gray-50">
          <main>
            <AppRoutes />
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
