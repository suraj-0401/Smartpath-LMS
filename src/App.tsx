import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/home/Spinner";

// Lazy load components
const Navbar = lazy(() => import("./components/home/Navbar"));
const Footer = lazy(() => import("./components/home/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./components/blogs/Blogs"));
const BlogDetails=lazy(()=>import( "./components/blogs/BlogDetails"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Products = lazy(() => import("./components/products/Products"));
const Support = lazy(() => import("./components/support/Support"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />

      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;