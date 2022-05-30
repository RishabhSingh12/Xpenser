import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AddExpense from "./pages/add-expense/add-expense";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
