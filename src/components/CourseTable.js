import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../components/CourseTable.css'
import CourseRow from "../components/CourseRow";


const CourseTable = ({courses,deleteCourse}) =>

           <div className="container data">

               {
                   courses.map((course)=> {
                                                 return(<CourseRow key={course.id} course={course}
                                                                deleteCourse={deleteCourse}/>)
                                             }
                   )
               }

           </div>

export default CourseTable