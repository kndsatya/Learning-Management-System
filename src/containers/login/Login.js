import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";

class Login extends React.Component {


    constructor(props){
        super(props)
        this.userService = new UserService()
        this.state={
            username : "",
            password : ""
        }
    }

    componentDidMount(){
        this.userService.loggedinUser().then(
            (user)=>{
                //console.log(user)
                if(user.id!=null){
                    this.props.history.push("/profile")
                }
            }
        )
    }

    onUserNameChange = (event)=>{
        this.state.username = event.target.value
    }

    onPasswordChange = (event)=>{
        this.state.password = event.target.value
    }

    login = (event)=>{
        event.preventDefault()
        let user={
            username:this.state.username,
            password: this.state.password
        }
        this.userService.loginUser(user).then(

            (user)=>{
                if(user.username!==null){
                return this.props.history.push("/profile")}
                alert("Invalid Credentials")
            }

        )
    }



    render() {
        return (<div>
            <div className="container">
                <h1>Sign In</h1>
                <form>

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Satya"
                            onChange={this.onUserNameChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-password-fld"
                                   id="password"
                                   type="password"
                                   placeholder="$adbada@12"
                            onChange={this.onPasswordChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block active"
                            onClick={this.login}>Sign in</button>
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
                                    <a className="float-right" role="btn"
                                       onClick={()=>this.props.history.push("/SignUp")}>Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default Login;