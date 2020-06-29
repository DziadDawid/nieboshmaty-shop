import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import {
    Koszyk,
    LandingPage,
    Categories,
    SendMessage,
    Torebeczki,
    Torebeczka,
    Koszuleczki,
    Koszuleczka,
    Inne,
    SingleInne,
} from "./components";
import { ReactComponent as InstagramIcon } from "./instagram-icon.svg";
import { ReactComponent as ShoppingCartIcon } from "./shopping_cart-icon.svg";

function App() {
    return (
        <div className="App">
            <a href="#" rel="noopener noreferrer" target="_blank">
                <InstagramIcon className="instagram-icon" />
            </a>
            <Link to="/koszyk">
                <ShoppingCartIcon className="shopping_cart-icon" />
            </Link>

            <Switch>
                <Route exact path="/">
                    <LandingPage />
                    <Categories />
                    <SendMessage />
                </Route>

                <Route exact path="/koszyk" component={Koszyk} />

                <Route exact path="/torebeczki" component={Torebeczki} />
                <Route
                    exact
                    path="/torebeczki/:torebeczka_title"
                    component={Torebeczka}
                />
                <Route exact path="/koszuleczki" component={Koszuleczki} />
                <Route
                    exact
                    path="/koszuleczki/:koszuleczka_title"
                    component={Koszuleczka}
                />
                <Route exact path="/inne" component={Inne} />
                <Route exact path="/inne/:inne_title" component={SingleInne} />
            </Switch>
        </div>
    );
}

export default App;
