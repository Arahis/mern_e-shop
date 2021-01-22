import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
