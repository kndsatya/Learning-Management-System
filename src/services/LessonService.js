class LessonService{

    constructor(){

    }


    createLesson = (moduleId,lesson)=>{
        const URL = "http://localhost:8081/api/module/"+moduleId+"/lesson"
        return fetch(URL,{
            credentials:'include',
            method:'post',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(lesson)
        }).then(response=>{
            return response.json()
        })
    }

    deleteLesson = (lessonId) =>{
        const URL = "http://localhost:8081/api/lesson/"+lessonId
        return fetch(URL,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => response.json()
        )
    }

    updateLesson = (lessonId,lesson) => {
        const URL = "http://localhost:8081/api/lesson/"+lessonId
        return fetch(URL,{
            method:'put',
            body: JSON.stringify(lesson),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        }).then(response=>response.json())
    }

    findAllLessons = (moduleId)=>{
        const URL="http://localhost:8081/api/module/"+moduleId+"/lesson"
        return fetch(URL,{
            credentials:'include'
        }).then(response=>response.json())
    }


}
export default LessonService