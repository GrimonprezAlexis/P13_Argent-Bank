import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { getJWT } from "../../services/user-service";
import { GET_JWT } from "../../store/actions/constants";


const SignIn = ({ match }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const dispatch = useDispatch();


  const onSubmit = async e => {

    const jwt = await getJWT(e);
        dispatch({
            type: GET_JWT,
            payload: jwt,
        });
    }

    return (
        <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
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
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <input className="sign-in-button" type="submit" name="Sign In" />
                </form>
            </section>
        </main>
        </>
    )
}

export default SignIn;
