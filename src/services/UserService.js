class UserService{

    constructor(){

    }

    register=(user)=>{
          return fetch("https://boiling-island-41253.herokuapp.com/api/register",{
               method:'post',
               body: JSON.stringify(user),
              credentials:'include',
               headers:{
                   "Accept" : "application/json",
                   "Content-Type" : "application/json"
               }
           })
               .then((response)=>{
                   return response.json()});
    }

    findAllUsers=()=>{
       return fetch("https://boiling-island-41253.herokuapp.com/api/users",{
           credentials:'include'
       })
            .then(response=>{
                return response.json()});
    }

    loggedinUser = ()=>{
        return fetch("https://boiling-island-41253.herokuapp.com/api/profile",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()
            });
    }

    updateUser=(user)=>{
        return fetch("https://boiling-island-41253.herokuapp.com/api/update",{
            method:'put',
            body: JSON.stringify(user),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }

    logout=()=>{
        return fetch("https://boiling-island-41253.herokuapp.com/api/logout",{
            credentials:'include'
        })
    }

    loginUser = (user) => {

        return fetch("https://boiling-island-41253.herokuapp.com/api/login",{
            method:'post',
            body: JSON.stringify(user),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }
 }

export default UserService;