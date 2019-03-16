
class ParagraphWidgetService{
    constructor(){

    }

    createWidget = (topicId, widget) => {

        return fetch("https://fast-mesa-67485.herokuapp.com/api/topic/"+topicId+"/paragraph/widget",{
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

        return fetch("https://fast-mesa-67485.herokuapp.com/api/topic/"+topicId+"/paragraph/widget",{
            credentials:'include'
        })
            .then(response=>{

                return response.json()});
    }


    findWidget=(widgetId)=>{
        let findCourseByIdURL = "https://fast-mesa-67485.herokuapp.com/api/paragraph/widget/"+widgetId
        return fetch(findCourseByIdURL,{
            credentials:'include'
        }).then(response=>{return response.json()})

    }

    updateWidget=(widgetId, updatedWidget)=>{

        const URL = "https://fast-mesa-67485.herokuapp.com/api/paragraph/widget/"+widgetId
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

        const URL = "https://fast-mesa-67485.herokuapp.com/api/paragraph/widget/"+widgetId
        return fetch(URL,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => response.json()
        )
    }
}

export default ParagraphWidgetService