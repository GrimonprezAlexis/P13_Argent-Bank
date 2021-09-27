import React from "react";
import { Link } from 'react-router-dom';

const Navigation = ({ profile }) => {

    return (
        <>
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
            <img
                className="main-nav-logo-image"
                src={`${window.location.origin}/img/argentBankLogo.png`}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                { profile && <Link to='/user' className="main-nav-item"><i className="fa fa-user-circle"></i> {profile.firstName} {profile.lastName}</Link> }
                { !profile && <Link to='/signin' className="main-nav-item"><i className="fa fa-user-circle"></i> Sign In</Link> }
            </div>
        </nav>
        </>
    )
}

export default Navigation;