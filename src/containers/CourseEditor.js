import React from 'react'
import EditorHeading from './EditorHeading'
import './CourseEditor.css'
import CourseService from "../services/CourseService";
import ModuleList from './ModuleList'
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import ModuleListItem from "./ModuleListItem";
import HeadingWidget from "./HeadingWidget";

class CourseEditor extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        let course = this.courseService.findCourseById(courseId)
        if(course===""){
            for(var i=0;i<props.courses.length;i++) {
                if(courseId===props.courses[i].id) {
                    course = props.courses[i]
                }
            }
        }
        this.state = {
            course: course,
            modules: course.modules,
            lessons: course.modules[0].lessons,
            topics: course.modules[0].lessons[0].topics,
            selectedModule : course.modules[0],
            selectedLesson : course.modules[0].lessons[0],
            selectedTopic : course.modules[0].lessons[0].topics[0],
            shouldModuleEdit: false,
            moduleToBeEdited: NaN,
            shouldLessonEdit: false,
            lessonToBeEdited: NaN,
            shouldTopicEdit: false,
            topicToBeEdited: NaN
        }
    }

    createModule = () => {

        let title;
        if(document.getElementById("module-input").value === ""){
            title = "New Module"
        } else{
            title = document.getElementById("module-input").value
        }
        this.setState({
                          modules: [
                              ...this.state.modules, {
                                  title: title,
                                  id: Math.random(),
                                  lessons:[
                                      {
                                           id: Math.random(),
                                          title: "New Lesson",
                                          topics:[
                                              {
                                                  id:Math.random(),
                                                  title:"New Topic"
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ],
                          shouldModuleEdit: false
                      })
        document.getElementById("module-input").value = ""
    }

    createLesson = () => {

        let title;
        if(document.getElementById("LessonInput").value === "") {
            title = "New Lesson"
        }else{
            title = document.getElementById("LessonInput").value
        }
        let lesson = {
            title: title,
            id: Math.random(),
            topics:[
                {
                    id:Math.random(),
                    title:"New Topic"
                }
            ]
        }

        let lessons = this.state.lessons
        lessons.push(lesson)

        this.setState({
                          lessons: lessons,
                          shouldLessonEdit : false
                      })

        document.getElementById("LessonInput").value = ""
    }

    createTopic = () => {

        let title;
        if(document.getElementById("TopicInput").value==="") {
            title = "New Topic"
        } else{
            title = document.getElementById("TopicInput").value
        }
        let topic = {
            title: title,
            id: Math.random()
        }

        let topics = this.state.topics
         topics.push(topic)
        this.setState({
                          topics: topics,
                          shouldTopicEdit: false
                      })
        document.getElementById("TopicInput").value = ""
    }

    deleteModule = (moduleToDelete) => {

        this.setState({
                          modules: this.state.modules.filter((module) =>
                                                                 module !== moduleToDelete),
                          shouldModuleEdit: false
                      })

    }

    deleteLesson = (lessonToDelete) => {

        for(var i=0;i<this.state.lessons.length;i++) {
            if(this.state.lessons[i]===lessonToDelete) {
                this.state.lessons.splice(i,1)
            }
        }

        this.setState({
                         lessons:this.state.lessons,
                         shouldLessonEdit : false

                      })

    }

    deleteTopic = (topicToDelete) => {

        for(var i=0;i<this.state.topics.length;i++) {
            if(this.state.topics[i]===topicToDelete) {
                this.state.topics.splice(i,1)
            }
        }

        this.setState({
                        topics : this.state.topics,
                        shouldTopicEdit : false
                      })

    }

    editModule = (module) => {
        document.getElementById("module-input").value = module.title
        this.setState({
                          shouldModuleEdit: true,
                          moduleToBeEdited: module
                      })
    }

    editLesson = (lesson) => {
        document.getElementById("LessonInput").value = lesson.title
        this.setState({
                          shouldLessonEdit: true,
                          lessonToBeEdited: lesson
                      })
    }

    editTopic = (topic) => {
        document.getElementById("TopicInput").value = topic.title
        this.setState({
                          shouldTopicEdit: true,
                          topicToBeEdited: topic
                      })
    }

    updateModule = () => {

        for (var i = 0; i < this.state.modules.length; i++) {
            if (this.state.modules[i] === this.state.moduleToBeEdited) {
                this.state.modules[i].title = document.getElementById("module-input").value;
                break;
            }
        }

        document.getElementById("module-input").value = ""

        this.setState({
                          modules: this.state.modules,
                          shouldModuleEdit: false
                      })
    }

    updateLesson = () => {

        for (var i = 0; i < this.state.lessons.length; i++) {
            if (this.state.lessons[i] === this.state.lessonToBeEdited) {
                this.state.lessons[i].title = document.getElementById("LessonInput").value;
                break;
            }
        }

        document.getElementById("LessonInput").value = ""

        this.setState({
                          lessons: this.state.lessons,
                          shouldLessonEdit: false
                      })
    }

    updateTopic = () => {

        for (var i = 0; i < this.state.topics.length; i++) {

            if (this.state.topics[i] === this.state.topicToBeEdited) {
                console.log("entered match")
                this.state.topics[i].title = document.getElementById("TopicInput").value;
                break;
            }
        }

        document.getElementById("TopicInput").value = ""

        this.setState({
                          topics: this.state.topics,
                          shouldTopicEdit: false
                      })
    }

    selectModule = (module) => {
        let selectedLesson;
        let selectedTopic;
        if(module.lessons.length!==0){
            selectedLesson = module.lessons[0]
            if(module.lessons[0].topics.length > 0) {
                selectedTopic = module.lessons[0].topics[0]
            }
        }

        this.setState({
                          lessons: module.lessons,
                          topics : module.lessons[0].topics,
                          selectedModule : module,
                          selectedLesson : selectedLesson,
                          selectedTopic : selectedTopic
                      })

    }

    selectLesson = (lesson) => {

        let selectedTopic;
      if(lesson.topics.length > 0) {
            selectedTopic = lesson.topics[0]
          console.log(selectedTopic)
        }
        this.setState({
                          topics : lesson.topics,
                          selectedLesson : lesson,
                          selectedTopic : selectedTopic
                      })
    }


    selectTopic = (topic) => {

        this.setState({
                          selectedTopic : topic
                      })
    }

    render() {

        return (
            <div>
                <EditorHeading courseName={this.state.course.title}/>
                <div className="row">
                    <div className="col-2">
                        <div className="wbdv-sidebar col-2">
                            <ModuleList modules={this.state.modules}
                                        createModule={this.createModule}
                                        deleteModule={this.deleteModule}
                                        editModule={this.editModule}
                                        updateModule={this.updateModule}
                                        shouldEdit={this.state.shouldModuleEdit}
                                        selectModule={this.selectModule}
                                        selectedModule = {this.state.selectedModule}/>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="col-12">
                            <div>
                                <LessonTabs lessons={this.state.lessons}
                                            createLesson={this.createLesson}
                                            editLesson={this.editLesson}
                                            deleteLesson={this.deleteLesson}
                                            updateLesson={this.updateLesson}
                                            shouldEdit={this.state.shouldLessonEdit}
                                            selectLesson={this.selectLesson}
                                            selectedLesson={this.state.selectedLesson}/>
                            </div>
                            <br/>
                            <div>
                                <TopicPills topics={this.state.topics} editTopic={this.editTopic}
                                            deleteTopic={this.deleteTopic}
                                            updateTopic={this.updateTopic}
                                            createTopic={this.createTopic}
                                            shouldEdit={this.state.shouldTopicEdit}
                                            selectTopic = {this.selectTopic}
                                            selectedTopic = {this.state.selectedTopic}/>
                            </div>

                            <div>
                                <div className="saveNpreview form-group row">
                                    <button className="btn btn-success mr-sm-4" id="save">Save</button>
                                    &nbsp;
                                    <h3>Preview &nbsp;</h3><a href="#"><i
                                    className="fa fa-toggle-off fa-2x"></i></a>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <HeadingWidget/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CourseEditor