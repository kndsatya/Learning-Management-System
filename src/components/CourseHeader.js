import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './CourseTable.css'

const CourseHeader = ({addCourse}) =>
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand nav-item nav-item-margin d-none d-md-block" href="#">Course
            Manager</a>
        <div className="col-sm-9 nav-item nav-item-margin">
            <input className="form-control place-holder"
                   id="course-name"
                   placeholder="New Course Title"/>
        </div>

        <span className="fa-stack nav-item-margin wbdv-button" role="btn"
              onClick={() => {
                  let newCourse = {
                      "courseName": document.getElementById("course-name").value
                  }
                  if(newCourse.courseName===""){
                      newCourse.courseName="New Course"
                  }
                  document.getElementById("course-name").value=""
                  addCourse(newCourse);
              }}>
<i className="fa fa-circle fa-stack-2x fa-circle-color"></i>
<i className="fa fa-plus fa-stack-2x fa-inverse"></i>
</span>
    </nav>

export default CourseHeader
