import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import clientAxios from '../../config/axios';



const NewCategory = ({ history }) => {

    // category = state, saveCategory = function for save state
    const [category, saveCategory] = useState({
        code: '',
        name: '',
        description: '',
    });

    // read data from form
    const updateState = (e) => {
        // Store what the user writes
        saveCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    // added new category on the REST API
    const addCategory = (e) => {
        e.preventDefault();

        // send request
        clientAxios.post('/api/categories', category);

        // reedirect to home
        history.push('/')
    }

    // validate field of form
    const validateCategory = () => {
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
            <form onSubmit={addCategory} className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mx-auto">New Category</h2>
                    <div className="relative mb-4">
                        <label for="code" className="leading-7 text-sm text-gray-600">Code</label>
                        <input onChange={updateState} type="text" id="code" name="code" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input onChange={updateState} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="description" className="leading-7 text-sm text-gray-600">Description</label>
                        <input onChange={updateState} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button disabled={validateCategory()} className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
                </div>
            </form>
        </section>
    )
}

// reedirect to home
export default withRouter(NewCategory);