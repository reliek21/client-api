import React from "react";


const SingleProduct = ({ product }) => {
    const {
        code,
        name,
        description,
        brand,
        category,
        price } = product;
    return (
        <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{code}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{description}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{brand}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{category.name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{price}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">Edit</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">Delete</td>
        </tr>
    )
}


export default SingleProduct;