import React from "react";


const SingleProduct = ({ product }) => {
    const {
        _id,
        code,
        name,
        description,
        brand,
        category,
        price } = product;
    return (
        <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{_id}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{code}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{description}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{brand}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{category.name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">${price}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900"><button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><i className="bi bi-pencil-square"></i></button></td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900"><button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"><i className="bi bi-trash3"></i></button></td>
        </tr>
    )
}


export default SingleProduct;