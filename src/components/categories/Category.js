import React from "react";


const SingleCategory = ({ category }) => {
    const {
        _id,
        code,
        name,
        description,
        active } = category;
    return (
        <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{_id}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{code}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{name}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{description}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">{active.toString()}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">Edit</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-sm text-gray-900">Delete</td>
        </tr>
    )
}


export default SingleCategory;