import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const mainNav = [
  { "link": "/", "text": "ГЛАВНАЯ" },
  { "link": "/about", "text": "О сайте" },
  { "link": "/cat", "text": "Категории" }
];
const catNav = [
  { "link": "/cat/notebook", "text": "Ноутбуки" },
  { "link": "/cat/monitor", "text": "Мониторы" },
  { "link": "/cat/cellphone", "text": "Мобильные телефоны" }
];

function App() {
  return (
    <div>
      <p>git test1</p>
      <Header nav={mainNav} />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/cat" component={Category}>
            <Category nav={catNav}></Category>
          </Route>
          <Route path="/cat/:Name" component={CategoryDescription} />
          <Route path="/cat/:Name" component={CategoryDescription} />
          <Route path="/cat/:Name" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
