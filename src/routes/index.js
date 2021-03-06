import React from "react";
import ShortShNavbar from "../components/ShortShNavbar";
import { Route, Switch } from "react-router";
// import Home from '../components/Home';
import NoMatch from '../components/NoMatch';
import Index from "../components/Index";
import Statistics from "../components/Statistics";
import ToS from "../components/ToS";
import Faq from "../components/Faq";
import About from "../components/About";


const routes = (
    <React.Fragment>
        <ShortShNavbar />
        <Switch>
            <Route exact path={"/"} component={Index} />
            <Route exact path={"/tos"} component={ToS} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/about"} component={About} />
            <Route strict path={"/:shortid\\+"} component={Statistics} />
            <Route component={NoMatch} />
        </Switch>
    </React.Fragment>
);

export default routes;