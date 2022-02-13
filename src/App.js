import React, { Fragment } from "react";
import Categories from "./components/layout/Categories";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// layout
import Product from "./components/layout/Products";
import NewProduct from "./components/products/NewProduct";
import NewCategory from "./components/categories/NewCategory";
import EditProduct from "./components/products/EditProduct";
import EditCategory from "./components/categories/EditCategory";


function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/product/new" component={NewProduct} />
                    <Route exact path="/product/edit/:id" component={EditProduct} />
                </Switch>
                <Product />
                <Switch>
                    <Route exact path="/category/new" component={NewCategory} />
                    <Route exact path="/category/edit/:id" component={EditCategory} />
                </Switch>
                <Categories />
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
