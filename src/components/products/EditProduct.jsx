import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

import clientAxios from '../../config/axios';



const EditProduct = (props) => {

    // get ID
    const { id } = props.match.params;

    // product = state, saveProducts = function for save state
    const [product, dataProducts] = useState({
        code: '',
        name: '',
        description: '',
        brand: '',
        category: '',
        price: ''
    });

    // query to API
    const getAPI = async () => {
        const getProduct = await clientAxios.get(`/api/products/${id}`);
        dataProducts(getProduct.data);
    }

    // load data
    useEffect(() => {
        getAPI();
    }, []);

    // read data from form
    const updateState = (e) => {
        // Store what the user writes
        dataProducts({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    // send request with axios for update product
    const updateProduct = (e) => {
        e.preventDefault();

        // send data with axios
        clientAxios.put(`/api/products/${product._id}`, product)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Updated product',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

        props.history.push('/');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
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
            <form onSubmit={updateProduct} className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mx-auto">Edit Product</h2>
                    <div className="relative mb-4">
                        <label htmlFor="code" className="leading-7 text-sm text-gray-600">Code</label>
                        <input value={product.code} onChange={updateState} type="text" id="code" name="code" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input value={product.name} onChange={updateState} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                        <input value={product.description} onChange={updateState} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="brand" className="leading-7 text-sm text-gray-600">Brand</label>
                        <input value={product.brand} onChange={updateState} type="text" id="brand" name="brand" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
                        <input value={product.category} onChange={updateState} type="text" id="category" name="category" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                        <input value={product.price} onChange={updateState} type="number" id="price" name="price" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button disabled={validateProduct()} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Edit Product</button>
                </div>
            </form>
        </section>
    )
}

// reedirect to home
export default withRouter(EditProduct);