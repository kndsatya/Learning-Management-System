class ModuleService{

    constructor(){

    }

    createModule = (module,courseId)=>{
        const URL = "https://boiling-island-41253.herokuapp.com/api/courses/"+courseId+"/modules"
        return fetch(URL,{
            credentials:'include',
            method:'post',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(module)
        }).then(response=>{
            return response.json()
        })
    }

    deleteModule = (moduleId) =>{
            const URL = "https://boiling-island-41253.herokuapp.com/api/modules/"+moduleId
            return fetch(URL,{
                           credentials:'include',
                           method:"delete"
                         }

            ).then(
                response => response.json()
            )
    }

    updateModule = (moduleId,module) => {
        const URL = "https://boiling-island-41253.herokuapp.com/api/modules/"+moduleId
        return fetch(URL,{
            method:'put',
            body: JSON.stringify(module),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        }).then(response=>response.json())
    }
}

export default ModuleService