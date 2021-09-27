import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGOUT } from "../../store/actions/constants";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



const User = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const profile = useSelector(state => state.user.profile);
    console.log('>>>> profile', profile);

    const [redirect, setRedirect] = useState();

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            if(!profile) {
                //localStorage.removeItem('jwt')
                setRedirect(true);
            };            
        }
    });

    if(redirect){
        return <Redirect to="/signin" />
    }


    return (
        <>
        <main className="main bg-dark">
            <button onClick={() => dispatch({
                type: USER_LOGOUT,
                payload: {},
            })}>Logout</button>
            
        <div className="header">
            <h1>Welcome back<br />  Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        </main>
        </>
    )
}

export default User;

 
