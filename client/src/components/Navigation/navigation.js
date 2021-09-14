import React from "react";
import { Link } from 'react-router-dom';

const Navigation = ({ profile }) => {

    return (
        <>
        <nav class="main-nav">
            <a class="main-nav-logo" href="./index.html">
            <img
                class="main-nav-logo-image"
                src={`${window.location.origin}/img/argentBankLogo.png`}
                alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                { profile && <Link to='/user' className="main-nav-item"><i class="fa fa-user-circle"></i> {profile.firstName} {profile.lastName}</Link> }
                { !profile && <Link to='/signin' className="main-nav-item"><i class="fa fa-user-circle"></i> Sign In</Link> }
            </div>
        </nav>
        </>
    )
}

export default Navigation;