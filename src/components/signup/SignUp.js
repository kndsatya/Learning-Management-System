import React from 'react'

const SignUp = () =>
    <div>
        <div className="container">
            <h1>Sign Up</h1>
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
                    <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify
                        Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld"
                               id="verify_password"
                               type="password"
                               placeholder="$adbada@12"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href="../profile/profile.template.client.html"
                           className="btn btn-primary btn-block active"
                           role="button" aria-pressed="true">Sign up</a>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href="../CourseList/course-list-template.client.html"
                           className="btn btn-danger btn-block active"
                           role="button" aria-pressed="true">Cancel</a>
                        <div className="row">
                            <div className="col-6">
                                <a href="../login/login.template.client.html">Login</a>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>

export default SignUp;