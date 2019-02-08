import React from 'react'
import './CourseTable.css'
import CourseCard from "../components/CourseCard";

        const CourseGrid = ({courses,deleteCourse}) =>
            <div className="container-fluid">
                <div className="card-deck">

                    {
                        courses.map((course)=> {
                                                   return(<CourseCard course={course}
                                                                      deleteCourse={deleteCourse}/>)
                                               }
                        )
                    }
                </div>

            </div>

export default CourseGrid;
