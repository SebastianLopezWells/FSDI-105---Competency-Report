const KEY="users"
function saveUser(userObj){
    let oldData = readUser();// getting local storage data
    oldData.push(userObj);//add the new user 

    let value = JSON.stringify(oldData);
    //SEnd the users to the local storage
    localStorage.setItem(KEY,value);
}

function readUser(){
    let data=localStorage.getItem(KEY);
    console.log(data); // <-JSON 

    if(!data){
        //if we dont have data
        return [];//creating an empty array
    }
    else{
        //if we have data
        let list = JSON.parse(data);
        return list; //array with obj
    }
}