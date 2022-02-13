import React, { Fragment } from "react";
import Categories from "./components/layout/Categories";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// layout
import Product from "./components/layout/Products";
import NewProduct from "./components/products/NewProduct";
import NewCategory from "./components/categories/NewCategory";


function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/product/new" component={NewProduct} />
                </Switch>
                <Product />
                <Switch>
                    <Route exact path="/category/new" component={NewCategory} />
                </Switch>
                <Categories />
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
