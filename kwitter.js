function Login(){
    var name = document.getElementById("username").value;
    var pww = document.getElementById("pw").value;

    if(name.value.length == 0){
        alert("Please fill in username");
    }

    else if(pww.value.length == 0){
        alert("Please fill in password");
    }

    else if(pww.value.length > 8){
        alert("Max of 8");

    }
    else{
        localStorage.setItem("username", name);
        localStorage.setItem("pw", pww);
        alert("Login");
        console.log("dodo");
        window.location = "kwitter__room.html";
    }
}