import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/jquery/dist/jquery.min.js'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './Profile.css'
import UserService from "../../services/UserService";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.userService = new UserService()
        this.state = {
               loginUser:{},
               user:{
                 phone:"",
                 email:"",
                 role:"",
                 dateOfBirth: ""
               }

        }


    }

    componentDidMount(){
        this.userService.loggedinUser().then(
            user => {
                 if(user.id===null){
                     this.props.history.push("/")
                 }
                this.setState(
                    {
                        loginUser: user,
                        user:{
                            phone: user.phone,
                            email:user.email,
                            role:user.role,
                            dateOfBirth:user.dateOfBirth
                        }
                    }
                )
            }
        )
    }

    updateProfile = (event)=>{
        event.preventDefault()
        const updatedUser = {
            id: this.state.loginUser.id,
            username:this.state.loginUser.username,
            password:this.state.loginUser.password,
            phone: this.state.user.phone,
            email:this.state.user.email,
            role:this.state.user.role,
            dateOfBirth: this.state.user.dateOfBirth
        }
        alert("Profile Updated Successfully")
        this.userService.updateUser(updatedUser)
            .then((user)=>this.setState({
                                      loginUser: user
                                    }))
    }

    logout = (event) => {
        event.preventDefault()
        this.userService.logout().then(()=>{
            this.props.history.push("/")
        })
    }

    phoneNumberChanged = (event)=>{
        this.state.user.phone = event.target.value
    }

    emailChanged = (event)=>{
        this.state.user.email = event.target.value
    }

    roleChanged = (event) => {
        this.state.user.role = event.target.value
    }

    dateOfBirthChanged = (event)=>{
        this.state.user.dateOfBirth = event.target.value
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Profile</h1>
                    <form>
                        {/*<div className="form-group row">*/}
                            {/*<label className="col-sm-2 col-form-label"></label>*/}
                            {/*{console.log(this.state.showUpdateSuccess)}*/}
                            {/*{this.state.showUpdateSuccess?<div*/}
                                {/*className="col-sm-10 alert alert-success alert-dismissible fade show"*/}
                                {/*role="alert">*/}
                                {/*<strong>Success!!!</strong> Profile updated successfully.*/}
                                {/*<button type="button" className="close" data-dismiss="alert"*/}
                                        {/*aria-label="Close">*/}
                                    {/*<span aria-hidden="true">&times;</span>*/}
                                {/*</button>*/}
                            {/*</div>:<div></div>}*/}
                        {/*</div>*/}

                        <div className="form-group row">
                            <label htmlFor="username"
                                   className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="username"
                                       defaultValue={this.state.loginUser.username}
                                       readOnly/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="phone"
                                       defaultValue={this.state.loginUser.phone}
                                       placeholder="(555) 123-4324"
                                      onChange={this.phoneNumberChanged}/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="email"
                                       type="email"
                                       defaultValue={this.state.loginUser.email}
                                       placeholder="jon@husky.neu.edu"
                                onChange={this.emailChanged}/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="role">Role</label>
                            <div className="col-sm-10">
                                <select name="role" id="role" className="custom-select mr-sm-2"
                                onChange={this.roleChanged}>
                                    {console.log(this.state.loginUser.role)}
                                    {
                                        this.state.loginUser.role === "" ? <option
                                            value="" selected>

                                        </option>:<option
                                            value="">

                                        </option>
                                    }
                                    {
                                        this.state.loginUser.role === "FACULTY" ? <option
                                                                         value="FACULTY" selected>
                                                                         Faculty
                                                                     </option> :
                                        <option
                                            value="FACULTY">
                                            Faculty
                                        </option>
                                    }
                                    {
                                        this.state.loginUser.role === "STUDENT" ? <option value="STUDENT"
                                                                               selected>
                                            Student
                                        </option> : <option value="STUDENT">
                                            Student
                                        </option>
                                    }
                                    {
                                        this.state.loginUser.role === "ADMIN" ? <option value="ADMIN" selected>
                                            Admin
                                        </option> : <option value="ADMIN">
                                            Admin
                                        </option>
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="dob" className="col-form-label col-sm-2">Date of
                                Birth</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="dob"
                                       type="date"
                                       defaultValue={this.state.loginUser.dateOfBirth}
                                       placeholder="mm/dd/yyyy"
                                onChange={this.dateOfBirthChanged}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button className="btn btn-success btn-block" onClick={this.updateProfile}>
                                    Update</button>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button className="btn btn-danger btn-block"
                                onClick={this.logout}>Logout</button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button type="button" className="btn btn-primary btn-block"
                                onClick={()=>{
                                    this.props.history.push("/table")
                                }}>Course Manager</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>)
    }
}

export default Profile;