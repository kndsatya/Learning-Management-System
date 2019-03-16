
class ImageWidgetService{
    constructor(){

    }

    createWidget = (topicId, widget) => {

        return fetch("http://localhost:8081/api/topic/"+topicId+"/image/widget",{
            credentials:'include',
            method:'post',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(widget)
        }).then(response=>{
            return response.json()
        })
    }

    findWidgets=(topicId)=>{

        return fetch("http://localhost:8081/api/topic/"+topicId+"/image/widget",{
            credentials:'include'
        })
            .then(response=>{

                return response.json()});
    }


    findWidget=(widgetId)=>{
        let findCourseByIdURL = "http://localhost:8081/api/image/widget/"+widgetId
        return fetch(findCourseByIdURL,{
            credentials:'include'
        }).then(response=>{return response.json()})

    }

    updateWidget=(widgetId, updatedWidget)=>{

        const URL = "http://localhost:8081/api/image/widget/"+widgetId
        return fetch(URL,{
            method:'put',
            body: JSON.stringify(updatedWidget),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        }).then(response=>response.json())
    }

    deleteWidget = (widgetId) =>{

        const URL = "http://localhost:8081/api/image/widget/"+widgetId
        return fetch(URL,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => response.json()
        )
    }
}

export default ImageWidgetService