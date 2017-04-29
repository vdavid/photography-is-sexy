import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import AboutPage from "./site/AboutPage";
import HomePage from "./site/HomePage";
import PageRoot from "./site/PageRoot";
import PageHeader from "./site/PageHeader";

export default class Application extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <PageRoot>
                    <PageHeader />
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route exact={true} path="/about" component={AboutPage}/>
                </PageRoot>
            </BrowserRouter>
        );
    }
}