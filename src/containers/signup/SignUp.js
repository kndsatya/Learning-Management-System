import React from 'react'
import UserService from "../../services/UserService";

 const SignUp=({usernameChanged,passwordChanged,reenteredPasswordChanged,registerUser})=>{

        return (<div>
            <div className="container">
                <h1>Sign Up</h1>
                <form>

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Satya" onChange={usernameChanged}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-password-fld"
                                   id="password"
                                   type="password"
                                   placeholder="$adbada@12" onChange={passwordChanged}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify
                            Password</label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-password-fld"
                                   id="verify_password"
                                   type="password"
                                   placeholder="$adbada@12"
                                   onChange={reenteredPasswordChanged}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={registerUser}>Sign up
                            </button>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-danger btn-block active">Cancel</button>
                            <div className="row">
                                <div className="col-6">
                                    <a href="../login/login.template.client.html">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>);
}

export default SignUp;