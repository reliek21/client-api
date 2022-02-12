import React, { Fragment } from "react";
import Categories from "./components/layout/Categories";

// layout
import Product from "./components/layout/Products";

function App() {
    return (
        <Fragment>
            <Product />
            <Categories />

        </Fragment>
    );
}

export default App;
