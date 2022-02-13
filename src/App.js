import React, { Fragment } from "react";
import Categories from "./components/layout/Categories";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// layout
import Product from "./components/layout/Products";
import NewClient from "./components/products/NewProduct";


function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/product/new" component={NewClient} />
                </Switch>
                <Product />
                <Categories />
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
