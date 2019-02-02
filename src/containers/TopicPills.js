import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CourseEditor.css'

class TopicPills extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {


        let inputBox;

        if(this.props.shouldEdit){

            inputBox =
                <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="TopicInput"
                           placeholder="New Lesson"/>
                    <button type="submit" className="btn btn-success col-sm-5"
                            onClick={this.props.updateTopic}>Update Topic
                    </button>
                </li>
        } else {
            inputBox =
                <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="TopicInput"
                           placeholder="New Topic"/>
                    <button type="submit" className="btn btn-success col-sm-5"
                            onClick={this.props.createTopic}>Add Topic
                    </button>
                </li>
        }

        return (<ul className="nav nav-pills">
            {
                this.props.topics.map(topic =>
                                          <li key={topic.id} className="nav-item" onClick={()=>{this.props.selectTopic(topic)}}>
                                              <a className={topic===this.props.selectedTopic?"nav-link active":"nav-link"}
                                                 href="#">{topic.title}&nbsp;&nbsp;&nbsp;
                                                  <FontAwesomeIcon onClick={() => this.props.deleteTopic(topic)}
                                                                   icon="trash-alt"/>
                                                  <FontAwesomeIcon onClick={() => this.props.editTopic(topic)}
                                                                   icon="pencil-alt"/>

                                              </a>
                                          </li>
                )
            }
            {inputBox}
        </ul>)
    }
}

export default TopicPills