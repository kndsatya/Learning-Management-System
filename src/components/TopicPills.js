import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../containers/CourseEditor.css'

class TopicPills extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let inputBox;

        if (this.props.shouldEdit) {

            inputBox =
            this.props.numberOfLessons!==0?    <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="TopicInput"
                           placeholder="New Lesson"/>
                    <button className="btn btn-success col-sm-5"
                            onClick={this.props.updateTopic}>Update Topic
                    </button>
                </li>:<li></li>
        } else {
            inputBox = this.props.numberOfLessons!==0?
                       <li className="form-inline mx-1">
                    <input type="text" className="form-control col-sm-5" id="TopicInput"
                           placeholder="New Topic"/>
                    <button className="btn btn-success col-sm-5"
                            onClick={this.props.createTopic}>Add Topic
                    </button>
                </li>:<li></li>
        }

        const topicStyle = {
            border: "1px solid"

        }

        return (<ul className="nav nav-pills">
            {
                this.props.topics.map(topic =>
                                          <li key={topic.id} className="nav-item" onClick={() => {
                                              this.props.selectTopic(topic)
                                          }}>
                                              <a className={topic.id
                                                            === this.props.selectedTopic.id
                                                            ? "nav-link active wbdv-button"
                                                            : "nav-link wbdv-button"}
                                                 style={topicStyle}
                                                 role="btn">{topic.topicName}&nbsp;&nbsp;&nbsp;
                                                  <FontAwesomeIcon
                                                      onClick={() => this.props.deleteTopic(
                                                          topic.id)}
                                                      icon="trash-alt"/>
                                                  <FontAwesomeIcon
                                                      onClick={() => this.props.editTopic(topic)}
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