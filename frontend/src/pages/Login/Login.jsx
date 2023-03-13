import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { getJWT, getUser } from '../../services/userService';
import { GET_JWT, GET_USER_PROFILE } from "../../store/actions/constants";

import Navigation from '../../components/Navigation/Navigation';
import './login.scss';
import Footer from "../../components/Footer/Footer";


const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const dispatch = useDispatch();
    const history = useHistory();
    const [apiError, setApiError] = useState(null);
    const jwt = useSelector((state) => state.user.jwt);

    useEffect(() => {
         if (jwt) {
             getUser(jwt).then(user => {
                 dispatch({
                     type: GET_USER_PROFILE,
                     payload: user
                 });
                 localStorage.setItem('user', JSON.stringify(user));
                 history.push('/user');
             });
         }
    }, [dispatch, history, jwt]);


    const onSubmit = async e => {
        const res = await getJWT(e);
        if (res && res.status) {
            setApiError(res);
        } 
        if (res && res.token) {
            localStorage.setItem('jwt', res.token);
            dispatch({
                type: GET_JWT,
                payload: res.token
            });
        }

        if (history && jwt) {
            getUser(jwt).then(user => {
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: user
                });
                history.push('/user');
            });
        }
    }
    return (
        <>
        <Navigation></Navigation>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input type="email" id="email"
                        {...register("email", {
                            required: true
                        })}
                    />
                    {errors.email ? errors.email.type === "required" && <p>This field is required</p> : ''}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        {...register("password", {
                        required: true
                        })}
                    />
                    {errors.password ? errors.password.type === "required" && <p>This field is required</p> : ''}
                </div>
                {apiError && <h3 className="apiError">{apiError.message}</h3>}

                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <input className="sign-in-button" type="submit" name="Sign In" value="Sign In" />
                </form>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default SignIn;
