import React, { useEffect, useState, Fragment } from "react";
import clientAxios from "../../config/axios";

import SingleProduct from "../products/Product"

function Products() {


    const [products, saveProducts] = useState([]);

    // Query to API
    const getDataAPI = async () => {
        const getProduct = await clientAxios.get('api/products');

        saveProducts(getProduct.data.products);
    }

    useEffect(() => {
        getDataAPI();
    }, []);


    return (
        <Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-1 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900">Products</h1>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/1 py-5 w-full mx-auto">
                        <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">New Product</button>
                    </div>
                    <div className="lg:w-2/1 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100 rounded-tl rounded-bl">Id</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100 rounded-tl rounded-bl">Code</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100">Description</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100">Brand</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100">Category</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100">Price</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text bg-gray-100"></th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text bg-gray-100 rounded-tr rounded-br"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <SingleProduct
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}


export default Products;