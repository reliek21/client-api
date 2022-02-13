import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

import clientAxios from '../../config/axios';



const EditCategory = (props) => {

    // get ID
    const { id } = props.match.params;

    // category = state, dataCategory = function for save state
    const [category, dataCategory] = useState({
        code: '',
        name: '',
        description: '',
    });

    // query to API
    const getAPI = async () => {
        const getCategory = await clientAxios.get(`/api/categories/${id}`);
        dataCategory(getCategory.data);
    }

    // load data
    useEffect(() => {
        getAPI();
    }, []);

    // read data from form
    const updateState = (e) => {
        // Store what the user writes
        dataCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    // send request with axios for update category
    const updateProduct = (e) => {
        e.preventDefault();

        // send data with axios
        clientAxios.put(`/api/categories/${category._id}`, category)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Updated category',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

        props.history.push('/#category');
    }


    // validate field of form
    const validateProduct = () => {
        // destructuring
        const {
            code,
            name,
            description,
        } = category;

        let valid = !code.length || !name.length || !description.length;


        return valid;
    }

    return (
        <section className="text-gray-600 body-font">
            <form onSubmit={updateProduct} className="container px-5 py-24 mx-auto flex flex-wrap items-center" id="category">
                <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mx-auto">Edit Category</h2>
                    <div className="relative mb-4">
                        <label htmlFor="code" className="leading-7 text-sm text-gray-600">Code</label>
                        <input value={category.code} onChange={updateState} type="text" id="code" name="code" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input value={category.name} onChange={updateState} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                        <input value={category.description} onChange={updateState} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button disabled={validateProduct()} className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Update Category</button>
                </div>
            </form>
        </section>
    )
}

// reedirect to home
export default withRouter(EditCategory);