class CourseService {

    constructor() {

    }

    addCourse = course => {
        return fetch("http://localhost:8081/api/courses",{
            credentials:'include',
            method:'post',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(course)
        }).then(response=>{
                return response.json()
            })
    }



    findCourseById = (courseId)=>{
        let findCourseByIdURL = "http://localhost:8081/api/courses/"+courseId
        return fetch(findCourseByIdURL,{
            credentials:'include'
        }).then(response=>{return response.json()})
    }

    findAllCourses=()=>{
        return fetch("http://localhost:8081/api/courses",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }

    deleteCourse = courseId =>{

        let deleteCourseAPI = "http://localhost:8081/api/courses/" + courseId
        return fetch(deleteCourseAPI,{
            method:"delete",
            credentials:'include'
        }).then(
            response => response.json()
         )
    }

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

    saveWidgets=(topicId,widgets)=>{

        for(const module of this.courses.modules){
            for(const lesson of module.lessons){
                for(const topic of lesson.topics){
                    if(topic.id==topicId){
                        topic.widgets=[]
                        topic.widgets=[...widgets]
                        return topic.widgets
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