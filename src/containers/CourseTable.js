import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../components/CourseTable.css'
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";
import CourseHeader from "../components/CourseHeader";
import CourseTitleBar from "../components/CourseTitleBar";

class CourseTable extends React.Component {
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

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then((courses) => this.setState({
                                                 courses: courses
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

    componentDidMount() {

        this.courseService.findAllCourses().then(
            (courses) => {
                this.setState({
                                  courses: courses
                              })
            }
        )

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

    render() {

        return (
            <div>
                <CourseHeader addCourse={this.addCourse}/>
                <CourseTitleBar layout="List"/>
                <div className="container data">

                    {
                        this.state.courses.map((course) => {
                                                   return (<CourseRow key={course.id} course={course}
                                                                      deleteCourse={this.deleteCourse}
                                                                      author={this.state.loginUser.username}/>)
                                               }
                        )
                    }

                </div>
            </div>
        )
    }
}

export default CourseTable