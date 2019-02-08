import React from 'react'
import '../containers/CourseEditor.css'

const EditorHeading = ({courseName}) =>
    <div className="container-fluid wbdv-course-name-header sticky-top">
      <h4>{courseName}</h4>
    </div>

export default EditorHeading