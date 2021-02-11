import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
