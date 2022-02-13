import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import clientAxios from '../../config/axios';



const NewClient = ({history}) => {

    // product = state, saveProducts = function for save state
    const [product, saveProducts] = useState({
        code: '',
        name: '',
        description: '',
        brand: '',
        category: '',
        price: ''
    });

    // read data from form
    const updateState = (e) => {
        // Store what the user writes
        saveProducts({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    // added new product on the REST API
    const addProduct = (e) => {
        e.preventDefault();

        // send request
        clientAxios.post('/api/products', product);
        
        // reedirect to home
        history.push('/')
    }

    // validate field of form
    const validateProduct = () => {
        // destructuring
        const {
            code,
            name,
            description,
            brand,
            category,
            price
        } = product;

        let valid = !code.length || !name.length || !description.length
            || !brand.length || !category.length || !price.length;


        return valid;
    }

    return (
        <section className="text-gray-600 body-font">
            <form onSubmit={addProduct} className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mx-auto">New Product</h2>
                    <div className="relative mb-4">
                        <label for="code" className="leading-7 text-sm text-gray-600">Code</label>
                        <input onChange={updateState} type="text" id="code" name="code" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input onChange={updateState} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="description" className="leading-7 text-sm text-gray-600">Description</label>
                        <input onChange={updateState} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="brand" className="leading-7 text-sm text-gray-600">Brand</label>
                        <input onChange={updateState} type="text" id="brand" name="brand" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="category" className="leading-7 text-sm text-gray-600">Category</label>
                        <input onChange={updateState} type="text" id="category" name="category" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="price" className="leading-7 text-sm text-gray-600">Price</label>
                        <input onChange={updateState} type="number" id="price" name="price" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button disabled={validateProduct()} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                </div>
            </form>
        </section>
    )
}

// reedirect to home
export default withRouter(NewClient);