import React from "react";
import { NavLink } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";


export const Navbar = () => {
    const { keycloak, initialized } = useKeycloak();
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div >
                <h1 className='display-7 fw-bold text-white'>Vijay React Application</h1>
            </div>

            <div className='container-fluid'>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    {<ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/user'>User</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/eventtransaction'>Event Transaction</NavLink>
                        </li>
                    </ul>}
                    <ul className='navbar-nav ms-auto'>
                        {renderSignInAndOutContent(keycloak)}
                    </ul>
                </div>
            </div>

        </nav>
    );
}

function renderSignInAndOutContent(keycloak: any) {
    if (keycloak.authenticated) {
        return (
            <li className='nav-item m-1'>
                <a type='button' className='btn btn-outline-light' href='#' onClick={() => keycloak.logout()}>Sign out</a>
            </li>
        )
    } else {
        return (
            <li className='nav-item m-1'>
                <a type='button' className='btn btn-outline-light' href='#' onClick={() => keycloak.login()}>Sign In</a>
            </li>
        )
    }
}