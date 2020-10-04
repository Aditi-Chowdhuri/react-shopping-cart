import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">Book Mania{" "}</Link>
              <div className="links-page">
              <a href="https://friendlychat-87c85.web.app/">Chat{" "}</a>
              <a href="https://react-shopping-cart-final.herokuapp.com/">Authors{" "}</a>
              <Link to="/admin">Admin{" "}</Link>
              </div>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>
              Made By - Aditi Nirapada Chowdhuri
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
