import React, {Component} from 'react'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseHeader from "./CourseHeader";
import CourseTitleBar from './CourseTitleBar'
import CourseGrid from './CourseGrid'
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

            <div className="sb-site-container">
                  <CourseHeader addCourse={this.addCourse}/>

                <Router>
                    <div>
                      <Route path="/table"
                             render={()=>{
                                 return(<div>
                                     <CourseTitleBar layout="List"/>
                                     <CourseTable deleteCourse={this.deleteCourse}
                                                  courses={this.state.courses}/>
                                 </div>);
                             }}/>
                        <Route path="/grid"
                               render={()=>{
                                   return(<div>
                                       <CourseTitleBar layout="Grid"/>
                                       <CourseGrid deleteCourse={this.deleteCourse}
                                                    courses={this.state.courses}/>
                                   </div>);
                               }}/>
                        <Route path='/' exact
                               render={()=>{
                                   return(<div>
                                       <CourseTitleBar layout="List"/>
                                       <CourseTable deleteCourse={this.deleteCourse}
                                                    courses={this.state.courses}/>
                                   </div>);
                               }}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default WhiteBoard;