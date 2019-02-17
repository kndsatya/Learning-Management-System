import React from 'react'
import EditorHeading from '../components/EditorHeading'
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import TopicService from "../services/TopicService";
import LessonService from "../services/LessonService";
import ModuleList from '../components/ModuleList'
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import ModuleListItem from "../components/ModuleListItem";
import HeadingWidget from "../components/HeadingWidget";

import WidgetListContainer from '../containers/WidgetListContainer'
import './CourseEditor.css'
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import UserService from "../services/UserService";

const store = createStore(widgetReducer);

class CourseEditor extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        this.moduleService = new ModuleService()
        this.lessonService = new LessonService()
        this.userService = new UserService()
        this.topicService = new TopicService()
        this.courseId = parseInt(props.match.params.id)
        this.state = {
            course: "",
            modules: "",
            lessons: "",
            topics: "",
            selectedModule: "",
            selectedLesson: "",
            selectedTopic: "",
            shouldModuleEdit: false,
            moduleToBeEdited: NaN,
            shouldLessonEdit: false,
            lessonToBeEdited: NaN,
            shouldTopicEdit: false,
            topicToBeEdited: NaN
        }
    }

    componentDidMount() {

        this.userService.loggedinUser().then(
            user => {

                if (user.id === null) {
                    this.props.history.push("/")
                }
            })

        this.courseService.findCourseById(this.courseId).then(
            (course) => {


                let modules = []
                let lessons = []
                let topics = []
                let selectedLesson = ""
                let selectedTopic = ""
                let selectedModule = ""

                if (course.id!==null) {
                    if (course.modules.length !== 0) {
                        modules = course.modules
                        selectedModule = course.modules[0]
                        if (selectedModule.lessons.length !== 0) {
                            lessons = selectedModule.lessons
                            selectedLesson = lessons[0]
                            if (selectedLesson.topics.length !== 0) {
                                topics = selectedLesson.topics
                                selectedTopic = topics[0]
                            }
                        }
                    }

                    this.setState({
                                      courseName: course.courseName,
                                      course: course,
                                      modules: course.modules,
                                      lessons: lessons,
                                      topics: topics,
                                      selectedModule: selectedModule,
                                      selectedLesson: selectedLesson,
                                      selectedTopic: selectedTopic,
                                      shouldModuleEdit: false,
                                      moduleToBeEdited: NaN,
                                      shouldLessonEdit: false,
                                      lessonToBeEdited: NaN,
                                      shouldTopicEdit: false,
                                      topicToBeEdited: NaN
                                  })
                }
            }
        )
    }

    createModule = (event) => {
        event.preventDefault()
        let module;
        if (document.getElementById("module-input").value === "") {
            module = {moduleName: "New Module"}
        } else {
            module = {moduleName: document.getElementById("module-input").value}
        }

        this.moduleService.createModule(module, this.state.course.id).then((modules) => {

            console.log("Modules from create module",modules)
            if (modules.length === 1) {
                this.state.selectedModule = modules[0]
            }

            console.log("create module-selected module",this.state.selectedModule)
            document.getElementById("module-input").value = ""
            this.setState({
                              modules: modules,
                              shouldModuleEdit: false,
                              selectedModule : this.state.selectedModule
                          })
        })
    }

    createLesson = (event) => {
        event.preventDefault()
        let lessonName;
        if (document.getElementById("LessonInput").value === "") {
            lessonName = "New Lesson"
        } else {
            lessonName = document.getElementById("LessonInput").value
        }
        let lesson = {
            lessonName : lessonName
        }

        this.lessonService.createLesson(this.state.selectedModule.id,lesson).then(

            (lessons)=>{

                let selectedLesson;
                if (lessons.length === 1) {
                    selectedLesson = lessons[0]
                }else{
                    selectedLesson = this.state.selectedLesson
                }
                for(var i=0;i<this.state.modules.length;i++){
                 if(this.state.modules[i].id===this.state.selectedModule.id){
                     this.state.modules[i].lessons = lessons
                     this.state.selectedModule.lessons = lessons
                 }
                }
                this.setState({
                              lessons: lessons,
                              shouldLessonEdit: false,
                              selectedLesson: selectedLesson,
                              modules : this.state.modules,
                              selectedModule:this.state.selectedModule
                          })}

        )
        document.getElementById("LessonInput").value = ""
    }

    createTopic = (event) => {
        event.preventDefault()
        console.log(this.state.selectedModule)
        let topicName;
        if (document.getElementById("TopicInput").value === "") {
            topicName = "New Topic"
        } else {
            topicName = document.getElementById("TopicInput").value
        }
        let topic = {
            topicName : topicName
        }

        this.topicService.createTopic(this.state.selectedLesson.id,topic).then(


            (topics)=>{

                let selectedTopic;
                if (topics.length === 1) {
                    selectedTopic = topics[0]
                }else{
                    selectedTopic = this.state.selectedTopic
                }

                console.log(this.state.selectedModule)
                for(var i=0;i<this.state.lessons.length;i++){
                       if(this.state.lessons[i].id===this.state.selectedLesson.id){
                           this.state.lessons[i].topics = topics
                           this.state.selectedLesson.topics = topics
                           break;
                       }
                }






                for(var i=0;i<this.state.modules.length;i++){
                    if(this.state.modules[i].id===this.state.selectedModule.id){
                        this.state.modules[i].lessons = this.state.lessons
                        break;
                    }
                }
                this.state.selectedModule.lessons = this.state.lessons



                this.setState({
                                  topics: topics,
                                  shouldTopicEdit: false,
                                  selectedTopic: selectedTopic,
                                  lessons : this.state.lessons,
                                  selectedLesson : this.state.selectedLesson,
                                  modules : this.state.modules,
                                  selectedModule : this.state.selectedModule
                              })}

        )
        document.getElementById("TopicInput").value = ""
    }

    deleteModule = (moduleId) => {

        let selectedModule
        this.moduleService.deleteModule(moduleId).then((modules) => {

            if(modules.length!==0){
                selectedModule = modules[0]
            }
            this.setState({
                              modules: modules,
                              shouldModuleEdit: false,
                              selectedModule:selectedModule
                          })
            if(modules.length!==0){
                this.selectModule(selectedModule)
            }
        })

    }

    deleteLesson = (lessonId) => {

        let selectedLesson
        this.lessonService.deleteLesson(lessonId).then(
            (lessons) => {

                if(lessons.length!==0){
                    selectedLesson = lessons[0]
                }
                this.setState({
                                  lessons: lessons,
                                  shouldLessonEdit: false,
                                  selectedLesson:selectedLesson
                              })
                if(lessons.length!==0){
                    this.selectLesson(selectedLesson)
                }
            }
        )
    }

    deleteTopic = (topicId) => {

        let selectedTopic
        this.topicService.deleteTopic(topicId).then(
            (topics) => {

                if(topics.length!==0){
                    selectedTopic = topics[0]
                }
                this.setState({
                                  topics: topics,
                                  shouldTopicEdit: false,
                                  selectedTopic:selectedTopic
                              })
                if(topics.length!==0){
                    this.selectTopic(selectedTopic)
                }
            }
        )
    }

    editModule = (module) => {
        document.getElementById("module-input").value = module.moduleName
        this.setState({
                          shouldModuleEdit: true,
                          moduleToBeEdited: module
                      })
    }

    editLesson = (lesson) => {
        document.getElementById("LessonInput").value = lesson.lessonName
        this.setState({
                          shouldLessonEdit: true,
                          lessonToBeEdited: lesson
                      })
    }

    editTopic = (topic) => {
        document.getElementById("TopicInput").value = topic.topicName
        this.setState({
                          shouldTopicEdit: true,
                          topicToBeEdited: topic
                      })
    }

    updateModule = () => {

        let indexOfModuleToUpdate = ""
        let newNameOfModule = document.getElementById("module-input").value
        document.getElementById("module-input").value = ""
        for (var i = 0; i < this.state.modules.length; i++) {
            if (this.state.selectedModule === this.state.modules[i]) {
                indexOfModuleToUpdate = i
            }
        }
        this.state.selectedModule.moduleName = newNameOfModule
        this.moduleService.updateModule(this.state.selectedModule.id, this.state.selectedModule)
            .then(
                () => {

                    this.setState({
                                      modules: this.state.modules,
                                      shouldModuleEdit: false
                                  })
                }
            )
    }

    updateLesson = () => {

         let newNameOfLesson = document.getElementById("LessonInput").value
        document.getElementById("LessonInput").value = ""
        this.state.selectedLesson.lessonName = newNameOfLesson
        this.lessonService.updateLesson(this.state.selectedLesson.id,this.state.selectedLesson)
            .then(
                ()=>{
                    this.setState({
                                      lessons: this.state.lessons,
                                      shouldLessonEdit: false
                                  })
                }
            )
    }

    updateTopic = () => {

        let newNameOfTopic = document.getElementById("TopicInput").value
        document.getElementById("TopicInput").value = ""
        this.state.selectedTopic.topicName = newNameOfTopic
        this.topicService.updateTopic(this.state.selectedTopic.id,this.state.selectedTopic)
            .then(
                ()=>{
                    this.setState({
                                      topics: this.state.topics,
                                      shouldTopicEdit: false
                                  })
                }
            )
        // for (var i = 0; i < this.state.topics.length; i++) {
        //
        //     if (this.state.topics[i] === this.state.topicToBeEdited) {
        //         console.log("entered match")
        //         this.state.topics[i].title = document.getElementById("TopicInput").value;
        //         break;
        //     }
        // }
        //
        // document.getElementById("TopicInput").value = ""
        //
        // this.setState({
        //                   topics: this.state.topics,
        //                   shouldTopicEdit: false
        //               })
    }

    selectModule = (module) => {
        let selectedLesson="";
        let selectedTopic="";
        let correspondingLessons = []
        let correspondingTopics = []

        this.lessonService.findAllLessons(module.id).then(
            (lessons) => {
                correspondingLessons = lessons
                if(correspondingLessons.length!==0) {
                    selectedLesson = correspondingLessons[0]
                    correspondingTopics = selectedLesson.topics
                    if (selectedLesson.topics.length !== 0) {
                        selectedTopic = selectedLesson.topics[0]
                    }
                }

                this.setState({
                                  lessons: correspondingLessons,
                                  topics: correspondingTopics,
                                  selectedModule: module,
                                  selectedLesson: selectedLesson,
                                  selectedTopic: selectedTopic
                              })
            }
        )

    }

    selectLesson = (lesson) => {

        let selectedTopic="";
        let correspondingTopics = []

        this.topicService.findAllTopics(lesson.id).then(
            (topics) => {
                correspondingTopics = topics
                if(correspondingTopics.length!==0) {
                     selectedTopic = correspondingTopics[0]
                    }

                this.setState({

                                  topics: correspondingTopics,
                                  selectedLesson: lesson,
                                  selectedTopic: selectedTopic
                              })
            }
        )
    }

    selectTopic = (topic) => {

        this.setState({
                          selectedTopic: topic
                      })
    }

    render() {

        if (this.state.course === "") {
            return <div></div>
        }

        // store.dispatch({
        //                    type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
        //                    courseService: this.courseService,
        //                    topicId: this.state.selectedTopic.id,
        //                    preview:false
        //                })


        return (
            <div>
                <EditorHeading courseName={this.state.course.courseName}/>
                <div className="row">
                    <div className="col-3">
                        <div className="wbdv-sidebar">
                            <ModuleList modules={this.state.modules}
                                        createModule={this.createModule}
                                        deleteModule={this.deleteModule}
                                        editModule={this.editModule}
                                        updateModule={this.updateModule}
                                        shouldEdit={this.state.shouldModuleEdit}
                                        selectModule={this.selectModule}
                                        selectedModule={this.state.selectedModule}/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="col-12">
                            <div>
                                <LessonTabs numberOfModules={this.state.modules.length}
                                            lessons={this.state.lessons}
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
                                <TopicPills numberOfLessons={this.state.lessons.length}
                                            topics={this.state.topics} editTopic={this.editTopic}
                                            deleteTopic={this.deleteTopic}
                                            updateTopic={this.updateTopic}
                                            createTopic={this.createTopic}
                                            shouldEdit={this.state.shouldTopicEdit}
                                            selectTopic={this.selectTopic}
                                            selectedTopic={this.state.selectedTopic}/>
                            </div>

                            {/*<div>*/}
                            {/*<Provider store={store}>*/}
                            {/*<WidgetListContainer/>*/}
                            {/*</Provider>*/}
                            {/*</div>*/}
                            {this.state.topics.length!==0?<div>
                                <HeadingWidget/>
                            </div>:<div></div>}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CourseEditor