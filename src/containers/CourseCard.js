import React from 'react'
import './CourseTable.css'

const CourseCard = ({course, deleteCourse}) =>
    <div className="col-sm-12 col-md-4 col-lg-2">
    <div className="card wbdv-card-bottom" styles="width:18rem;">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"
        alt="Course view"/>
            <div className="card-body">
                <h5 className="card-title wbdv-card-text">
                    {course.title}</h5>
                <div className="form-group row">
                <button
                   className="btn btn-primary col-sm-6">
                    Edit
                </button>
                <button onClick={() => deleteCourse(course)}
                   className="btn btn-danger col-sm-6">Delete</button>
                </div>
            </div>
    </div>
    </div>

export default CourseCard;