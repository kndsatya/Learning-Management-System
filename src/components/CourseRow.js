import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../services/courses.json';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGripHorizontal, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './CourseTable.css';

library.add(faGripHorizontal, faFileAlt)


    const CourseRow = ({course,deleteCourse,author})=>

        <div>

                <div className="row">
                    <div className="col-6">
                            <FontAwesomeIcon icon="file-alt" className="fa-document-color fa-2x"/>
                            <Link to={`/CourseEditor/${course.id}`}>
                                {course.courseName}</Link>

                    </div>
                    <div className="col-2 d-none d-md-block">
                        {author}
                    </div>

                    <div className="col-2 d-none d-md-block">
                        6:45 PM
                    </div>

                    <div className="col-2 d-none d-md-block">
                        <a  role="btn" onClick={()=> {deleteCourse(course.id)}}>
                            <i className="fa fa-times float-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>

            </div>


export default CourseRow