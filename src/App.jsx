import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
