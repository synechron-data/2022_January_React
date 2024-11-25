import React from 'react';
import { NavLink } from 'react-router-dom';

import SwitchComponent from '../../routes';

import './NavigationComponent.css';

var logo = require('../../assets/redux.svg').default;

const NavigationComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex flex-column align-items-center" to="/">
                        <img src={logo} alt="React" width="70" height="28" className="d-inline-block align-text-top" />
                        React Redux
                    </NavLink>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <NavLink exact className="nav-link d-flex flex-column align-items-center" to="/">
                                    <i className="bi bi-house-fill"></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/about">
                                    <i className="bi bi-file-person-fill"></i>
                                    <span>About</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/hoc1">
                                    <i className="bi bi-dice-1-fill"></i>
                                    <span>HOC One</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/hoc2">
                                    <i className="bi bi-dice-2-fill"></i>
                                    <span>HOC Two</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/counter">
                                    <i className="bi bi-123"></i>
                                    <span>Counter</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/fcounter">
                                    <i className="bi bi-123"></i>
                                    <span>FCounter</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/fcounterroot">
                                    <i className="bi bi-123"></i>
                                    <span>FCounterRoot</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/products">
                                    <i className="bi bi-box"></i>
                                    <span>Products</span>
                                </NavLink>
                            </li>

                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/login">
                                    <i className="bi bi-person-square"></i>
                                    <span>Login</span>
                                </NavLink>
                            </li>

                            {/* <li className="nav-item px-3">
                                <NavLink className="nav-link logout d-flex flex-column align-items-center" to="/login">
                                    <i className="bi bi-person-square"></i>
                                    <span>Logout</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="card border-0 shadow my-5">
                <div className="card-body">
                    {SwitchComponent}
                </div>
            </div>
        </>
    );
};

export default NavigationComponent;