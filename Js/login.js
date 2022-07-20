function login(){
    console.log('login');
    //get the values from the form
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    //use a flag
    let flag = false;
    //get the users from the LocalStorage
    let users = readUser();
    
    //travel the user list
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        let emailS = user.email;
        let passwordS = user.password;
        //compare the input values with the values from the Local Storage
        if(email == emailS && password == passwordS) {
            flag = true;
            window.location="users.html"
        }
        else{
            console.log("Email and password are not the same");
            flag = false;
        }

        
    }
    if(!flag) {
        $("#alert-error").removeClass("hide");
        setTimeout(function() {
            $("#alert-error").addClass("hide");},3000);
    }
}

function init() {
    $("#loginBTN").click(login);
}

window.onload = init;