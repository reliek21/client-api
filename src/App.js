import React, { Fragment } from "react";
import Categories from "./components/layout/Categories";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// layout
import Product from "./components/layout/Products";
import NewProduct from "./components/products/NewProduct";
import NewCategory from "./components/categories/NewCategory";
import EditProduct from "./components/products/EditProduct";
import EditCategory from "./components/categories/EditCategory";
import Header from "./components/layout/Header";


function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Header />
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
                <footer className="text-gray-600 body-font">
                    <div className="px-5 py-8 mx-auto flex items-center sm:flex-row bg-gray-100">
                        <a href="https://github.com/reliek21" className="flex mx-auto title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <p className="ml-3">Create by:</p>
                            <span className="ml-3 text-xl">Keiler Guardo</span>
                        </a>
                    </div>
                </footer>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
