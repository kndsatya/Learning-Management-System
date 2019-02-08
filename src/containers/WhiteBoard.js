import React, {Component} from 'react'
import CourseTable from '../components/CourseTable'
import CourseService from '../services/CourseService'
import CourseHeader from "../components/CourseHeader";
import CourseTitleBar from '../components/CourseTitleBar'
import CourseGrid from '../components/CourseGrid'
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            courses: this.courseService.findAllCourses(),
        }
    }

    deleteCourse = course =>
        this.setState({
                          courses: this.courseService.deleteCourse(course)
                      })

    addCourse = (course) =>
        this.setState({
                          courses: this.courseService.addCourse(course)
                      })

    render() {

        return (

            <div>
                <Router>
                    <div>
                        <Route path="/table"
                               render={() => {
                                   return (<div className="sb-site-container">
                                       <CourseHeader addCourse={this.addCourse}/>
                                       <CourseTitleBar layout="List"/>
                                       <CourseTable deleteCourse={this.deleteCourse}
                                                    courses={this.state.courses}/>
                                   </div>);
                               }}/>
                        <Route path="/grid"
                               render={() => {
                                   return (<div className="sb-site-container">
                                       <CourseHeader addCourse={this.addCourse}/>
                                       <CourseTitleBar layout="Grid"/>
                                       <CourseGrid deleteCourse={this.deleteCourse}
                                                   courses={this.state.courses}/>
                                   </div>);
                               }}/>
                        <Route path='/' exact
                               render={() => {
                                   return (<div>
                                       <CourseHeader addCourse={this.addCourse}/>
                                       <CourseTitleBar layout="List"/>
                                       <CourseTable deleteCourse={this.deleteCourse}
                                                    courses={this.state.courses}/>
                                   </div>);
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