import courses from './courses.json'
let instance = null;
class CourseService {
    constructor() {
        this.courses = courses;
    }
    addCourse = course => {
        if(course.title === "") {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )

    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

   createWidget = (topicId, widget) => {


            for(const module of this.courses.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        if(topic.id==topicId){
                            const widgets = topic.widgets;
                            widgets.push(widget);
                        }
                    }
                }
            }
    }

    findWidgets=(topicId)=>{

            for(const module of this.courses.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        if(topic.id==topicId){
                            return topic.widgets;
                        }
                    }
                }
            }
        return null;
    }

    findWidget=(widgetId)=>{


            for(const module of this.courses.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        for(const widget of topic.widgets) {
                            if(widget.id==widgetId){
                                return widget;
                            }
                        }
                    }
                }
            }
        return null;
    }

    updateWidget=(widgetId, updatedWidget)=>{

            for(const module of this.courses.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        for(const [index,widget] of topic.widgets.entries()) {
                            if(widget.id==widgetId){
                                 topic.widgets[index]=updatedWidget;
                            }
                        }
                    }
                }
            }
    }

    deleteWidget = (widgetId) =>{
            for(const module of this.courses.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                          topic.widgets = topic.widgets.filter((widget)=> widget.id!==widgetId)
                    }
                }
            }
    }

}

export default CourseService