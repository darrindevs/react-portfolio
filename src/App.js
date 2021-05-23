import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Navbar from "./components/Navabar";
//import List from "./components/List";
import List2 from "./components/List2";
//import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
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
        <Route exact path="/project1" component={Project1} />
        <Route exact path="/project2" component={Project2} />
        <Route exact path="/project3" component={Project3} />
        <Route exact path="/project4" component={Project4} />
        <Route exact path="/project5" component={Project5} />
        <Route exact path="/project6" component={Project6} />
        </main>
        <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
