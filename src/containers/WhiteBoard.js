import React, {Component} from 'react'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseHeader from "../components/CourseHeader";
import CourseTitleBar from '../components/CourseTitleBar'
import CourseGrid from './CourseGrid'
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Profile from "./profile/Profile";
import UserService from "../services/UserService";

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService()
        this.userService = new UserService()
        this.state = {
            // courses: [],
            loginUser: {
                id: "",
                username: "",
                firstName: "",
                lastName: "",
                password: "",
                phone: "",
                email: "",
                role: "",
                dateOfBirth: ""
            }
        }
    }

    componentDidMount() {
        this.userService.loggedinUser().then(
            user => {

                this.setState(
                    {
                        loginUser: user
                    }
                )
            }

        )

    }

    updateLoginUser = (user) => {
        this.setState({
                          loginUser: user
                      })
    }



    render() {

        return (

            <div>
                <Router>
                    <div>
                        <Route exact path="/table"
                               render={() => {
                                   document.body.style.backgroundColor = "#eeeeee";
                                   return (<div>
                                          <CourseTable/>
                                   </div>);
                               }}/>
                        <Route exact path="/grid"
                               render={() => {
                                   document.body.style.backgroundColor = "#eeeeee";
                                   return (<div>
                                       <CourseGrid/>
                                   </div>);
                               }}/>
                        <Route path='/' exact
                               render={(props) => {
                                   return (<div>
                                       <Login {...props}/>
                                   </div>);
                               }}/>
                        <Route path='/profile' exact
                               render={(props) => {
                                   return (<div>
                                       <Profile {...props}/>
                                   </div>)
                               }}/>

                        <Route path='/signUp' exact
                               render={(props) => {
                                   return (<div>
                                       <SignUp {...props} updateLoginUser={this.updateLoginUser}/>
                                   </div>)
                               }}/>

                        <Route path='/login' exact
                               render={(props) => {
                                   return (<div>
                                       <Login {...props}/>
                                   </div>)
                               }}/>

                        <Route path="/CourseEditor/:id"
                               exact
                               component={CourseEditor}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;