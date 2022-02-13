import React from "react";

import clientAxios from '../../config/axios';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleProduct = ({ product }) => {
    // extract values
    const {
        _id,
        code,
        name,
        description,
        brand,
        category,
        price } = product;



    // delete product
    const deleteProduct = (idProduct) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#16A34A',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                clientAxios.delete(`/api/products/${idProduct}`)
                    .then(res => {
                        if (res) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{_id}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{code}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{description}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{brand}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{category.name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">${price}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900"><Link to={`/product/edit/${_id}`} className="ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><i className="bi bi-pencil-square"></i></Link></td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900"><button onClick={() => deleteProduct(_id)} className="ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"><i className="bi bi-trash3"></i></button></td>
        </tr>
    )
}


export default SingleProduct;