import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <h1>Hello, React Router!</h1>
      <Link to="/about">About</Link>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About page goes here! 🎉</h1>
      <Link to="/">Home</Link>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);