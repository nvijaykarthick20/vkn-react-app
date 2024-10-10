import React from "react";

export const Navbar = () => {
    return (

        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <h1 className='display-5 fw-bold text-white'>Vijay React Application</h1>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    {/*  <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Worksheet</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Loan</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Expense Manager</a>
                        </li>
                    </ul> */}
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}