import "./App.css";
import Form from "./pages/Form/Form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Moviedetails from "./pages/MovieDetails/MovieDetails";
import Favourites from "./pages/Favourites/Favourites";
import ProtectedComponent from "./components/protectedComponent";
import { Provider } from "react-redux";
import store from "./store/store";
import { LangProvider } from "./context/langContext";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <Provider store={store}>
      <Router>
        <LangProvider value={{ lang, setLang }}>
          <div dir={lang == "en" ? "ltr" : "rtl"} >
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Form} />
              <Route path="/about" exact component={About} />
              <Route path="/movie-details/:id" exact component={Moviedetails} />
              <ProtectedComponent
                exact
                path="/favourite"
                component={Favourites}
              />
            </Switch>
          </div>
        </LangProvider>
      </Router>
    </Provider>
  );
}

export default App;
