
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

}

export default CourseService