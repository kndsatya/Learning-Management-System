class TopicService{

    constructor(){

    }


    createTopic = (lessonId,topic)=>{
        const URL = "https://fast-mesa-67485.herokuapp.com/api/lesson/"+lessonId+"/topic"
        return fetch(URL,{
            credentials:'include',
            method:'post',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(topic)
        }).then(response=>{
            return response.json()
        })
    }

    deleteTopic = (topicId) =>{
        const URL = "https://fast-mesa-67485.herokuapp.com/api/topic/"+topicId
        return fetch(URL,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => response.json()
        )
    }

    updateTopic = (topicId,topic) => {
        const URL = "https://fast-mesa-67485.herokuapp.com/api/topic/"+topicId
        return fetch(URL,{
            method:'put',
            body: JSON.stringify(topic),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        }).then(response=>response.json())
    }

    findAllTopics = (topicId)=>{
        const URL="https://fast-mesa-67485.herokuapp.com/api/lesson/"+topicId+"/topic"
        return fetch(URL,{
            credentials:'include'
        }).then(response=>response.json())
    }

}

export default TopicService