class UserService{

    constructor(){

    }

    register=(user)=>{
          return fetch("http://localhost:8081/api/register",{
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
       return fetch("http://localhost:8081/api/users",{
           credentials:'include'
       })
            .then(response=>{
                return response.json()});
    }

    loggedinUser = ()=>{
        return fetch("http://localhost:8081/api/profile",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()
            });
    }

    updateUser=(user)=>{
        return fetch("http://localhost:8081/api/update",{
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
        return fetch("http://localhost:8081/api/logout",{
            credentials:'include'
        })
    }

    loginUser = (user) => {

        return fetch("http://localhost:8081/api/login",{
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