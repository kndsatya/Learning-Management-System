import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './CourseTable.css'
import CourseRow from "./CourseRow";


const CourseTable = ({courses,deleteCourse}) =>

           <div className="container data">

               {
                   courses.map((course)=> {
                                                 return(<CourseRow course={course}
                                                                deleteCourse={deleteCourse}/>)
                                             }
                   )
               }

           </div>

export default CourseTable