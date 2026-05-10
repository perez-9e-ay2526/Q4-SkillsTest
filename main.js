function loginCheck(){
    var userVar = document.getElementById('usernameInput');
    var passVar = document.getElementById('passwordInput');

    switch (userVar.value == 7242011){ // switch states that username MUST = "7242011"
        case true : 
            if (passVar.value == "ilabyumaam!"){ // if returned true and password = ilabyumaam!, then:
                window.alert("Welcome, Student 7242011!");
                window.location.href ="notebooks.html"
            }
            else if (passVar.value !== "ilabyumaam!"){ // if returned true but passoword doesn't = ilabyumaam!, then:
                window.alert("Wrong password!");
            }
            break;
        case false:
            if (passVar.value == "ilabyumaam!"){
                window.alert("Wrong username!"); // if returned true but password = ilabyumaam!, then:
            }
            else if (passVar !== "ilabyumaam!"){
                window.alert("Wrong username and password!"); // if returned true and password doesn't = ilabyumaam!, then:
            }
            break;
    }
    


}