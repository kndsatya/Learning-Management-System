class LessonService{

    constructor(){

    }


    createLesson = (moduleId,lesson)=>{
        const URL = "https://fast-mesa-67485.herokuapp.com/api/module/"+moduleId+"/lesson"
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
        const URL = "https://fast-mesa-67485.herokuapp.com/api/lesson/"+lessonId
        return fetch(URL,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => response.json()
        )
    }

    updateLesson = (lessonId,lesson) => {
        const URL = "https://fast-mesa-67485.herokuapp.com/api/lesson/"+lessonId
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
        const URL="https://fast-mesa-67485.herokuapp.com/api/module/"+moduleId+"/lesson"
        return fetch(URL,{
            credentials:'include'
        }).then(response=>response.json())
    }


}
export default LessonService