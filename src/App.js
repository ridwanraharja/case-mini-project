import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative pb-20 min-h-screen w-full bg-[#111827]">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
