import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import About from "./compponents/About/About";
import Footer from "./compponents/Footer/Footer";
import Header from "./compponents/Header/Header";
import Home from "./compponents/Home/Home";
import Services from "./compponents/Services/Services";
import NotFound from "./compponents/NotFound/NotFound";
import Blogs from "./compponents/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
