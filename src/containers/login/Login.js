import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom";

const Login = () =>
    <div>
        <div className="container">
            <h1>Sign In</h1>
            <form>

                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               placeholder="Satya"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld"
                               id="password"
                               type="password"
                               placeholder="$adbada@12"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-success btn-block active">Sign in</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-danger btn-block active">Cancel</button>
                        <div className="row">
                            <div className="col-6">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="col-6">
                                <a href="../register/register.template.client.html"
                                   className="float-right">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

export default Login;