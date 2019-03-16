
class CourseService {

    constructor() {

    }

    addCourse = course => {
        return fetch("https://fast-mesa-67485.herokuapp.com/api/courses",{
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
        let findCourseByIdURL = "https://fast-mesa-67485.herokuapp.com/api/courses/"+courseId
        return fetch(findCourseByIdURL,{
            credentials:'include'
        }).then(response=>{return response.json()})
    }

    findAllCourses=()=>{
        return fetch("https://fast-mesa-67485.herokuapp.com/api/courses",{
            credentials:'include'
        })
            .then(response=>{

                return response.json()});
    }

    deleteCourse = courseId =>{

        let deleteCourseAPI = "https://fast-mesa-67485.herokuapp.com/api/courses/" + courseId
        return fetch(deleteCourseAPI,{
            method:"delete",
            credentials:'include'
        }).then(
            response => response.json()
         )
    }

}

export default CourseService