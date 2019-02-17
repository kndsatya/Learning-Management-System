import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../containers/CourseEditor.css'

class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        let inputBox;

        if(this.props.shouldEdit){

            inputBox =
             this.props.numberOfModules!==0?  <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="LessonInput"
                           placeholder="New Lesson"/>
                    <button className="btn btn-success col-sm-5"
                            onClick={this.props.updateLesson}>Update Lesson
                    </button>
                </li>:<li></li>
        } else {
            inputBox = this.props.numberOfModules!==0?
                <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="LessonInput"
                           placeholder="New Lesson"/>
                    <button className="btn btn-success col-sm-5"
                            onClick={this.props.createLesson}>Add Lesson
                    </button>
                </li>:<li></li>
        }


        const lessonStyle={
            backgroundColor: "#fff",
            border:"1px solid"

        }
        const activeStyle={
            backgroundColor:"#007bff",
            color : "#fff",
            border:"1px solid"
        }

        return (<ul className="nav nav-tabs wbdv-list-nav-tabs">

            {


                this.props.lessons.map(lesson =>{

                    return(<li key={lesson.id} className="nav-item"
                                    onClick={()=>{this.props.selectLesson(lesson)}}>
                                    <a className={JSON.stringify(lesson)===
                                                  JSON.stringify(this.props.selectedLesson)?"nav-link active wbdv-label-text":
                                                  "nav-link wbdv-label-text"}
                                       style={JSON.stringify(lesson)===JSON.stringify(this.props.selectedLesson)?
                                                activeStyle:lessonStyle}
                                       role="btn">{lesson.lessonName}&nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon onClick={() => this.props.deleteLesson(lesson.id)}
                                            icon="trash-alt"/>
                                        <FontAwesomeIcon onClick={() => this.props.editLesson(lesson)}
                                            icon="pencil-alt"/>
                                    </a>
                                </li>)}
                )
            }
            {inputBox}
        </ul>);
    }
}

export default LessonTabs
