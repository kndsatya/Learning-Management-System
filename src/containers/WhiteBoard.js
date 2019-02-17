import React, {Component} from 'react'
import CourseTable from '../components/CourseTable'
import CourseService from '../services/CourseService'
import CourseHeader from "../components/CourseHeader";
import CourseTitleBar from '../components/CourseTitleBar'
import CourseGrid from '../components/CourseGrid'
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
            courses: [],
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

        this.courseService.findAllCourses().then(
            (courses) => {
                console.log(courses)
                this.setState({
                                  courses: courses
                              })
            }
        )
    }

    updateLoginUser = (user) => {
        this.setState({
                          loginUser: user
                      })
    }

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then((course) => this.setState({
                                                courses: course
                                            })
            )
    }

    addCourse = (course) => {

        this.courseService.addCourse(course).then(
            (courses) => this.setState({
                                           courses: courses
                                       })
        )
    }

    render() {

        return (

            <div>
                <Router>
                    <div>
                        <Route exact path="/table"
                               render={() => {

                                   if(this.state.loginUser.id===null){
                                       return <Redirect to="/"/>
                                   }

                                   this.courseService.findAllCourses().then(
                                       (courses) => this.setState({courses: courses})
                                   )
                                   document.body.style.backgroundColor = "#eeeeee";
                                   return (<div>
                                       <CourseHeader addCourse={this.addCourse}/>
                                       <CourseTitleBar layout="List"/>
                                       <CourseTable deleteCourse={this.deleteCourse}
                                                    courses={this.state.courses}/>
                                   </div>);
                               }}/>
                        <Route exact path="/grid"
                               render={() => {
                                   if(this.state.loginUser.id===null){
                                       return <Redirect to="/"/>
                                   }
                                   this.courseService.findAllCourses().then(
                                       (courses) => this.setState({courses: courses})
                                   )
                                   document.body.style.backgroundColor = "#eeeeee";
                                   return (<div className="sb-site-container">
                                       <CourseHeader addCourse={this.addCourse}/>
                                       <CourseTitleBar layout="Grid"/>
                                       <CourseGrid deleteCourse={this.deleteCourse}
                                                   courses={this.state.courses}/>
                                   </div>);
                               }}/>
                        <Route path='/' exact
                               render={(props) => {
                                   // return (<div>
                                   //     <CourseHeader addCourse={this.addCourse}/>
                                   //     <CourseTitleBar layout="List"/>
                                   //     <CourseTable deleteCourse={this.deleteCourse}
                                   //                  courses={this.state.courses}/>
                                   // </div>);
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
        );
    }
}

export default WhiteBoard;