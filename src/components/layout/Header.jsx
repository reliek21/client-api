import React from "react";

const Header = () => {
    return (
        <header className="mx-auto text-gray-600 body-font">
            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row bg-gray-100">
                <a href="https://client-api-21.herokuapp.com/" className="flex mx-auto order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <i className=" text-5xl bi bi-house-fill text-green-500"></i>
                </a>
            </div>
        </header>
    )
}

export default Header;