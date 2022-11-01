import "./Content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../views/examples/About";
import About from "../../views/examples/Home";
import Home from "../../views/examples/Home";



const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
);

export default Content;