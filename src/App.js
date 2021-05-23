import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Navbar from "./components/Navabar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <Navbar />
        <NavTabs />
        <main class="flex-auto">{/* keep flex-auto for sticky footer */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        </main>
        <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
