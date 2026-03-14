// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';  

function Home() {
  return (
    <div className="page">
      <h2> Home Page</h2>
      <p>Welcome to my awesome website built with React Router!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2> About Me</h2>
      <p>I'm learning React and this is my first multi‑page app.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2> Contact</h2>
      <p>Email: me@example.com</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">   
      <h1>My React Router Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
