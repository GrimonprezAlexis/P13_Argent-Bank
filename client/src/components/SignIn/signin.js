import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


const SignIn = ({ match }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [redirect, setRedirect] = useState();


  const onSubmit = e => {
        axios.post('http://localhost:3001/api/v1/user/login', {
            email: e.email,
            password: e.password
        })
        .then(res => {
            if(res.data && res.data.status === 200) {
                localStorage.setItem('jwt', res.data.body.token);
                setRedirect(true);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
            setRedirect(false);  
        });
    }

    if(redirect){
        return <Redirect to="/user" />
    }

    return (
        <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label for="email">Email</label>
                    <input type="email" id="email"
                        {...register("email", {
                            required: true
                        })}
                    />
                    {errors.email ? errors.email.type === "required" && <p>This field is required</p> : ''}
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password"
                        {...register("password", {
                        required: true
                        })}
                    />
                    {errors.password ? errors.password.type === "required" && <p>This field is required</p> : ''}
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <input className="sign-in-button" type="submit" name="Sign In" />
                </form>
            </section>
        </main>
        </>
    )
}

export default SignIn;
