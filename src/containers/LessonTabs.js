import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CourseEditor.css'

class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        let inputBox;

        if(this.props.shouldEdit){

            inputBox =
                <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="LessonInput"
                           placeholder="New Lesson"/>
                    <button type="submit" className="btn btn-success col-sm-5"
                            onClick={this.props.updateLesson}>Update Lesson
                    </button>
                </li>
        } else {
            inputBox =
                <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="LessonInput"
                           placeholder="New Lesson"/>
                    <button type="submit" className="btn btn-success col-sm-5"
                            onClick={this.props.createLesson}>Add Lesson
                    </button>
                </li>
        }

        return (<ul className="nav nav-tabs wbdv-list-nav-tabs">

            {
                this.props.lessons.map(lesson =>
                                <li key={lesson.id} className="nav-item"
                                    onClick={()=>{this.props.selectLesson(lesson)}}>
                                    <a className={lesson===this.props.selectedLesson?"nav-link active wbdv-label-text":
                                                  "nav-link wbdv-label-text"}
                                       href="#">{lesson.title}&nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon onClick={() => this.props.deleteLesson(lesson)}
                                            icon="trash-alt"/>
                                        <FontAwesomeIcon onClick={() => this.props.editLesson(lesson)}
                                            icon="pencil-alt"/>
                                    </a>
                                </li>
                )
            }
            {inputBox}
        </ul>);
    }
}

export default LessonTabs
