import React from 'react';

const Profile = () =>
    <div>
        <div className="container">
            <h1>Profile</h1>
            <form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10 alert alert-success alert-dismissible fade show"
                         role="alert">
                        <strong>Success!!!</strong> Profile updated successfully.
                        <button type="button" className="close" data-dismiss="alert"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               value="Satya"
                               readOnly/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="phone"
                               placeholder="(555) 123-4324"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="email"
                               type="email"
                               placeholder="jon@husky.neu.edu"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="role">Role</label>
                    <div className="col-sm-10">
                        <select name="role" id="role" className="custom-select mr-sm-2">
                            <option value="FACULTY">
                                Faculty
                            </option>
                            <option value="STUDENT">
                                Student
                            </option>
                            <option value="ADMIN">
                                Admin
                            </option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="dob" className="col-form-label col-sm-2">Date of Birth</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="dob"
                               type="date"
                               placeholder="mm/dd/yyyy"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-success btn-block">Update</button>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-danger btn-block">Logout</button>
                    </div>
                </div>

            </form>
        </div>
    </div>

export default Profile;