import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//TODO import bootstrap
import "bootstrap/dist/css/bootstrap.css";
// import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//* Component
import ShowBlogs from "./Components/ShowBlogs";
import CreateBlogs from "./Components/CreateBlogs";
import BlogsList from "./Components/BlogsList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="navbar bg-light">
            <Container>
              <a href=" " className="navbar-brand">
                <Link to="/" className="nav-link">
                  React-Mern-Blogs
                </Link>
              </a>

              <Nav className="justify-content-end menu">
                <Nav>
                  <Link to="/create-blogs" className="nav-link">
                    Create Blogs
                  </Link>
                </Nav>
                <Nav>
                  <Link to="/blogs-list" className="nav-link">
                    Blogs List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </nav>
        </header>

        <Container>
          <Row>
            <Col md="12">
              <Switch>
                <Route exact path="/" component={ShowBlogs}></Route>
                <Route path="/create-blogs" component={CreateBlogs}></Route>
                <Route path="/blogs-list" component={BlogsList}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
